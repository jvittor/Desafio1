import { Injectable } from '@nestjs/common';
import { NoteRepository } from '../repositories/NoteRepository';
import { NoteNotFoundException } from '../exceptions/NoteNotFoundException';

@Injectable()
export class DeleteNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute(id: string) {
    const note = await this.noteRepository.findById(id);

    if (!note) throw new NoteNotFoundException();

    await this.noteRepository.delete(id);
  }
}
