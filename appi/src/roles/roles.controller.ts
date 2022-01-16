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
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';


@ApiTags('roles')
@Controller('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)

export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body(ValidationPipe) createRoleDto: CreateRoleDto) {
    try {
      const result = await this.rolesService.create(createRoleDto);;
      return new ResponseDTO('Created new Roles and Permissions.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try{
      const Roles =  await this.rolesService.findAll();
      return new ResponseDTO('List of Roles available.', Roles, 200);
      } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      const Roles =  await this.rolesService.findOne(id);;
      return new ResponseDTO('List of Roles available.', Roles, 200);
      } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    try{
      const Result =  await this.rolesService.update(id, updateRoleDto);
      return new ResponseDTO('Updated Role.', Result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
