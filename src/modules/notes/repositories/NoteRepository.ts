import { Note } from '../entities/Notes';

export abstract class NoteRepository {
  abstract create(note: Note): Promise<void>;
  abstract update(note: Note): Promise<void>;
  abstract findById(id: string): Promise<Note | null>;
  abstract findAll(): Promise<Note[]>;
  abstract delete(id: string): Promise<void>;
}
