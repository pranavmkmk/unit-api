import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServiceProfilesService } from './service-profiles.service';
import { CreateServiceProfileDto } from './dto/create-service-profile.dto';
import { UpdateServiceProfileDto } from './dto/update-service-profile.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from 'src/util/response.util';

@ApiTags('service-profiles')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('service-profiles')
export class ServiceProfilesController {
  constructor(private readonly serviceProfilesService: ServiceProfilesService) {}

  @Post()
  async create(@Body() createServiceProfileDto: CreateServiceProfileDto) {
    try {
      const result = await this.serviceProfilesService.create(createServiceProfileDto);;
      return new ResponseDTO('Created new service-profiles.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.serviceProfilesService.findAll();
      return new ResponseDTO('List of service-profiles available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.serviceProfilesService.findOne(id);
      return new ResponseDTO('service-profiles available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateServiceProfileDto: UpdateServiceProfileDto) {
    try {
      const Result = await this.serviceProfilesService.update(id, updateServiceProfileDto);
      return new ResponseDTO('Updated service-profiles.', Result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProfilesService.remove(+id);
  }
}
