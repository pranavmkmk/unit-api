import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from 'src/util/response.util';
import { BeneficiaryTypesService } from './beneficiary-types.service';
import { CreateBeneficiaryTypeDto } from './dto/create-beneficiary-type.dto';
import { UpdateBeneficiaryTypeDto } from './dto/update-beneficiary-type.dto';

@ApiTags('beneficiary-types')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('beneficiary-types')
export class BeneficiaryTypesController {
  constructor(private readonly beneficiaryTypesService: BeneficiaryTypesService) {}

  @Post()
  async create(@Body() createBeneficiaryTypeDto: CreateBeneficiaryTypeDto) {
    try {
      const result = await this.beneficiaryTypesService.create(createBeneficiaryTypeDto);;
      return new ResponseDTO('Created new beneficiary-types.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.beneficiaryTypesService.findAll();
      return new ResponseDTO('List of beneficiary-types available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.beneficiaryTypesService.findOne(id);
      return new ResponseDTO('List of beneficiary-types available.', result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBeneficiaryTypeDto: UpdateBeneficiaryTypeDto) {
    try {
      const Result = await this.beneficiaryTypesService.update(id, updateBeneficiaryTypeDto);
      return new ResponseDTO('Updated Role.', Result,200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiaryTypesService.remove(+id);
  }
}
