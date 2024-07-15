import { Injectable } from '@nestjs/common';
import { NoteRepository } from '../repositories/NoteRepository';
import { NoteNotFoundException } from '../exceptions/NoteNotFoundException';

@Injectable()
export class GetNoteByIdUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute(id: string) {
    const note = await this.noteRepository.findById(id);

    if (!note) throw new NoteNotFoundException();

    return note;
  }
}
