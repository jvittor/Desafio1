import { Injectable } from '@nestjs/common';
import { NoteRepository } from '../repositories/NoteRepository';
import { NoteNotFoundException } from '../exceptions/NoteNotFoundException';
import { Note } from '../entities/Notes';

interface UpdateNoteRequest {
  id: string;
  content?: string;
}

@Injectable()
export class UpdateNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute({ id, content }: UpdateNoteRequest) {
    const note = await this.noteRepository.findById(id);

    if (!note) throw new NoteNotFoundException();
    if (content) note.content = content;

    note.updatedAt = new Date();

    await this.noteRepository.update(note);

    return note;
  }
}
