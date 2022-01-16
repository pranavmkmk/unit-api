import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete ,  
  Inject,
  UseGuards,
  ValidationPipe,
  Query
 } from '@nestjs/common';
import { AccountProvidersService } from './account-providers.service';
import { CreateAccountProviderDto } from './dto/create-account-provider.dto';
import { UpdateAccountProviderDto } from './dto/update-account-provider.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';

@Controller('account-providers')
@ApiTags('account-providers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AccountProvidersController {
  constructor(private readonly accountProvidersService: AccountProvidersService) {}

  @Post()
  async create(@Body(ValidationPipe)  createAccountProviderDto: CreateAccountProviderDto) {
    try {
      const result = await this.accountProvidersService.create(createAccountProviderDto);;
      return new ResponseDTO('Created new Account Provider.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try{
      const result =  await this.accountProvidersService.findAll();;
      return new ResponseDTO('List of Account Providers available.', result,200);
      } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      const result =  await this.accountProvidersService.findOne(id);;
      return new ResponseDTO('List of  Account Providers available.', result,200);
      } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAccountProviderDto: UpdateAccountProviderDto) {
    try{
      const Result =  await this.accountProvidersService.update(id, updateAccountProviderDto);
      return new ResponseDTO('Updated  Account Provider.', Result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountProvidersService.remove(+id);
  }
}
