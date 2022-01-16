import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';
import { JwtAuthGuard } from '../core/auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('services')
@ApiTags('services')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) { }

  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    try {
      const service = await this.servicesService.create(createServiceDto);
      return new ResponseDTO("service created successfully", service, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const service = await this.servicesService.findAll();
      return new ResponseDTO("Success", service, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const service = await this.servicesService.findOne(id);
      return new ResponseDTO(" success", service, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    try {
      const service = await this.servicesService.update(id, updateServiceDto);
      return new ResponseDTO("service updated successfully", service, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
