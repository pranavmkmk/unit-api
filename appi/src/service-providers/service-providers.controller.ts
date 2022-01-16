import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ServiceProvidersService } from './service-providers.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';

@ApiTags('service-providers')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('service-providers')
export class ServiceProvidersController {
  constructor(private readonly serviceProvidersService: ServiceProvidersService) { }

  @Post()
  async create(@Body() createServiceProviderDto: CreateServiceProviderDto) {
    try {
      const service_provider = await this.serviceProvidersService.create(createServiceProviderDto);
      return new ResponseDTO("service provider created successfully", service_provider, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const service_provider = await this.serviceProvidersService.findAll();
      return new ResponseDTO("Success", service_provider, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const service_provider = await this.serviceProvidersService.findOne(id);
      return new ResponseDTO("success", service_provider, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: any, @Body() updateServiceProviderDto: UpdateServiceProviderDto) {
    try {
      const service_provider = await this.serviceProvidersService.update(id, updateServiceProviderDto);
      return new ResponseDTO("service provder updated successfully", service_provider, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProvidersService.remove(+id);
  }
}
