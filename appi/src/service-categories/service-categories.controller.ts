import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ServiceCategoriesService } from './service-categories.service';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { ResponseDTO, ErrorResponseDTO } from '../util/response.util';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';

@ApiTags('service-categories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('service-categories')
export class ServiceCategoriesController {
  constructor(private readonly serviceCategoriesService: ServiceCategoriesService) { }

  @Post()
  async create(@Body() createServiceCategoryDto: CreateServiceCategoryDto) {
    try {
      const service_category = await this.serviceCategoriesService.create(createServiceCategoryDto);
      return new ResponseDTO("service category created successfully", service_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const service_category = await this.serviceCategoriesService.findAll();
      return new ResponseDTO("Success", service_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const service_category = await this.serviceCategoriesService.findOne(id);
      return new ResponseDTO("success", service_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: any, @Body() updateServiceCategoryDto: UpdateServiceCategoryDto) {
    try {
      const service_category = await this.serviceCategoriesService.update(id, updateServiceCategoryDto);
      return new ResponseDTO("service_category updated successfully", service_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceCategoriesService.remove(+id);
  }
}
