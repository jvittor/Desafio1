import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CreateNoteUseCase } from '../../../../modules/notes/useCases/CreateNoteUseCase';
import { GetAllNotesUseCase } from '../../../../modules/notes/useCases/GetAllNotesUseCase';
import { GetNoteByIdUseCase } from '../../../../modules/notes/useCases/GetNoteByIdUseCase';
import { UpdateNoteUseCase } from '../../../../modules/notes/useCases/UpdateNoteUseCase';
import { DeleteNoteUseCase } from '../../../../modules/notes/useCases/DeleteNoteUseCase';
import { AuthGuard } from '@nestjs/passport';

@Controller('notes')
@UseGuards(AuthGuard('jwt'))
export class NotesController {
  constructor(
    private createNoteUseCase: CreateNoteUseCase,
    private getAllNotesUseCase: GetAllNotesUseCase,
    private getNoteByIdUseCase: GetNoteByIdUseCase,
    private updateNoteUseCase: UpdateNoteUseCase,
    private deleteNoteUseCase: DeleteNoteUseCase,
  ) { }

  @Post()
  async create(@Body() body: { content: string; userId: string }) {
    return await this.createNoteUseCase.execute(body);
  }


  @Get()
  async findAll() {
    return await this.getAllNotesUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.getNoteByIdUseCase.execute(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: { content?: string }) {
    return await this.updateNoteUseCase.execute({ id, ...body });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.deleteNoteUseCase.execute(id);
  }
}
