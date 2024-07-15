import { Note } from '../entities/Notes';

type Override = Partial<Note>;

export const makeNote = ({ id, userId, ...override }: Override = {}) => {
  return new Note(
    {
        content: 'Default Content',
        userId: userId || 'default-user-id',
        ...override,
      },
      id,
  );
};
