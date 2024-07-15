import { Injectable } from '@nestjs/common';
import { NoteRepository } from '../repositories/NoteRepository';

@Injectable()
export class GetAllNotesUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute() {
    return await this.noteRepository.findAll();
  }
}
