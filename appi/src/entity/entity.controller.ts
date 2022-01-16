import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EntityService } from './entity.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { ErrorResponseDTO, ResponseDTO } from 'src/util/response.util';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';

@ApiTags('entity')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) { }

  @Post()
  async create(@Body() createEntityDto: CreateEntityDto) {
    try {
      const result = await this.entityService.create(createEntityDto);;
      return new ResponseDTO('Created new Entity.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.entityService.findAll();
      return new ResponseDTO('List of Entity available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.entityService.findOne(id);
      return new ResponseDTO('List of entity available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEntityDto: UpdateEntityDto) {
    try {
      const Result = await this.entityService.update(id, updateEntityDto);
      return new ResponseDTO('Updated Role.', Result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
}
