import { Note } from '../../../../../modules/notes/entities/Notes';
import { Note as NoteRaw } from '@prisma/client';

export class PrismaNoteMapper {
  static toPrisma({
    id,
    userId,
    content,
    createdAt,
    updatedAt,
  }: Note): NoteRaw {
    return {
      id,
      userId,
      content,
      updatedAt,
      createdAt,
    };
  }

  static toDomain({
    id,
    userId,
    content,
    createdAt,
    updatedAt,
  }: NoteRaw): Note {
    return new Note(
      {
        userId,
        content,
        updatedAt,
        createdAt,
      },
      id,
    );
  }
}