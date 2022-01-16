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
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';

@ApiTags('permissions')
@Controller('permissions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)

export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Get()
  async findAll() {
    try{
      const Roles =  await this.permissionsService.findAll();
      return new ResponseDTO('List of Permissions available.', Roles, 200);
      } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      const Roles =  await this.permissionsService.findOne(id);;
      return new ResponseDTO('List of Permissions available', Roles, 200);
      } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

}
