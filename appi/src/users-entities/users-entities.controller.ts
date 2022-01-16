import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersEntitiesService } from './users-entities.service';
import { CreateUsersEntityDto } from './dto/create-users-entity.dto';
import { UpdateUsersEntityDto } from './dto/update-users-entity.dto';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';


@ApiTags('users-entities')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users-entities')

export class UsersEntitiesController {
  constructor(private readonly usersEntitiesService: UsersEntitiesService) { }

  @Post()
  async create(@Body() createUsersEntityDto: CreateUsersEntityDto) {
    try {
      const result = await this.usersEntitiesService.create(createUsersEntityDto);;
      return new ResponseDTO('Created new UserEntity.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.usersEntitiesService.findAll();
      return new ResponseDTO('List of usersEntities available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.usersEntitiesService.findOne(id);
      return new ResponseDTO('List of usersEntities available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUsersEntityDto: UpdateUsersEntityDto) {
    try {
      const Result = await this.usersEntitiesService.update(id, updateUsersEntityDto);
      return new ResponseDTO('Updated usersEntities.', Result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersEntitiesService.remove(+id);
  }
}
