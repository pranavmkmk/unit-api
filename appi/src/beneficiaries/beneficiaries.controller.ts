import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from 'src/util/response.util';
import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';


@ApiTags('beneficiaries')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('beneficiaries')
export class BeneficiariesController {
  constructor(private readonly beneficiariesService: BeneficiariesService) { }

  @Post()
  async create(@Body() createBeneficiaryDto: CreateBeneficiaryDto) {
    try {
      const result = await this.beneficiariesService.create(createBeneficiaryDto);;
      return new ResponseDTO('Created new Beneficiary.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.beneficiariesService.findAll();
      return new ResponseDTO('List of Beneficiaries available.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.beneficiariesService.findOne(id);
      return new ResponseDTO('List of Beneficiaries available.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBeneficiaryDto: UpdateBeneficiaryDto) {
    try {
      const Result = await this.beneficiariesService.update(id, updateBeneficiaryDto);
      return new ResponseDTO('Updated Beneficiaries.', Result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariesService.remove(+id);
  }
}
