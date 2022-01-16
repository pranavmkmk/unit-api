import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from 'src/util/response.util';
import { AccountTypesService } from './account-types.service';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { UpdateAccountTypeDto } from './dto/update-account-type.dto';

@ApiTags('account-types')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('account-types')
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}

  @Post()
  async create(@Body() createAccountTypeDto: CreateAccountTypeDto) {
    try {
      const result = await this.accountTypesService.create(createAccountTypeDto);;
      return new ResponseDTO('Created new account-types.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.accountTypesService.findAll();
      return new ResponseDTO('List of account-types available.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.accountTypesService.findOne(id);
      return new ResponseDTO('account-type available.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccountTypeDto: UpdateAccountTypeDto) {
    try {
      const Result = await this.accountTypesService.update(id, updateAccountTypeDto);
      return new ResponseDTO('Updated account-type.', Result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountTypesService.remove(+id);
  }
}
