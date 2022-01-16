import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ServiceSubCategoriesService } from './service-sub-categories.service';
import { CreateServiceSubCategoryDto } from './dto/create-service-sub-category.dto';
import { UpdateServiceSubCategoryDto } from './dto/update-service-sub-category.dto';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';

@ApiTags('service-sub-categories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('service-sub-categories')
export class ServiceSubCategoriesController {
  constructor(private readonly serviceSubCategoriesService: ServiceSubCategoriesService) { }

  @Post()
  async create(@Body() createServiceSubCategoryDto: CreateServiceSubCategoryDto) {
    try {
      const service_sub_category = await this.serviceSubCategoriesService.create(createServiceSubCategoryDto);
      return new ResponseDTO("service provider created successfully", service_sub_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const service_sub_category = await this.serviceSubCategoriesService.findAll();
      return new ResponseDTO("Success", service_sub_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const service_sub_category = await this.serviceSubCategoriesService.findOne(id);
      return new ResponseDTO("success", service_sub_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: any, @Body() updateServiceSubCategoryDto: UpdateServiceSubCategoryDto) {
    try {
      const service_sub_category = await this.serviceSubCategoriesService.update(id, updateServiceSubCategoryDto);
      return new ResponseDTO("service_sub_category provder updated successfully", service_sub_category, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.serviceSubCategoriesService.remove(id);
  }
}


