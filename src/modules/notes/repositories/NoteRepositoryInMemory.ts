import { Note } from '../entities/Notes';
import { NoteRepository } from './NoteRepository';

export class NoteRepositoryInMemory implements NoteRepository {
  findAll(): Promise<Note[]> {
    throw new Error('Method not implemented.');
  }
  public notes: Note[] = [];

  async create(note: Note): Promise<void> {
    this.notes.push(note);
  }

  async update(note: Note): Promise<void> {
    this.notes = this.notes.map((u) => (u.id === note.id ? note : u));
  }

  async findById(id: string): Promise<Note | null> {
    const note = this.notes.find((note) => note.id === id);

    if (!note) return null;

    return note;
  }

  async delete(id: string): Promise<void> {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  async findAllByUserId(userId: string): Promise<Note[]> {
    return this.notes.filter((note) => note.userId === userId);
  }
}