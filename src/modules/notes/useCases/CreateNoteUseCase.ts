import { Injectable } from '@nestjs/common';
import { NoteRepository } from '../repositories/NoteRepository';
import { Note } from '../entities/Notes';

interface CreateNoteRequest {
  userId: string;
  content: string;
}

@Injectable()
export class CreateNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute({ userId, content }: CreateNoteRequest) {
    const note = new Note({
      userId,
      content,
    });

    await this.noteRepository.create(note);

    return note;
  }
}