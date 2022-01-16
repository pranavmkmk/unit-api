import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServiceProfileEntityService } from './service-profile-entity.service';
import { CreateServiceProfileEntityDto } from './dto/create-service-profile-entity.dto';
import { UpdateServiceProfileEntityDto } from './dto/update-service-profile-entity.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from 'src/util/response.util';

@ApiTags('service-profile-entity')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('service-profile-entity')

export class ServiceProfileEntityController {
  constructor(private readonly serviceProfileEntityService: ServiceProfileEntityService) {}

  @Post()
  async create(@Body() createServiceProfileEntityDto: CreateServiceProfileEntityDto) {
    try {
      const result = await this.serviceProfileEntityService.create(createServiceProfileEntityDto);;
      return new ResponseDTO('Created new service-profiles.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.serviceProfileEntityService.findAll();
      return new ResponseDTO('List of service-profiles available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.serviceProfileEntityService.findOne(id);
      return new ResponseDTO('service-profiles available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateServiceProfileEntityDto: UpdateServiceProfileEntityDto) {
    try {
      const Result = await this.serviceProfileEntityService.update(id, updateServiceProfileEntityDto);
      return new ResponseDTO('Updated service-profiles.', Result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProfileEntityService.remove(+id);
  }
}
