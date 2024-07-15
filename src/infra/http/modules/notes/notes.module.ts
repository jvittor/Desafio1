import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { CreateNoteUseCase } from '../../../../modules/notes/useCases/CreateNoteUseCase';
import { GetAllNotesUseCase } from '../../../../modules/notes/useCases/GetAllNotesUseCase';
import { GetNoteByIdUseCase } from '../../../../modules/notes/useCases/GetNoteByIdUseCase';
import { UpdateNoteUseCase } from '../../../../modules/notes/useCases/UpdateNoteUseCase';
import { DeleteNoteUseCase } from '../../../../modules/notes/useCases/DeleteNoteUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';  // Certifique-se de que o caminho está correto

@Module({
  imports: [DatabaseModule],
  controllers: [NotesController],
  providers: [
    CreateNoteUseCase,
    GetAllNotesUseCase,
    GetNoteByIdUseCase,
    UpdateNoteUseCase,
    DeleteNoteUseCase,
  ],
})
export class NotesModule {}
