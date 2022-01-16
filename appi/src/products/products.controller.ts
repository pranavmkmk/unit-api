import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
  ValidationPipe,
  Query
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../core/auth/guard/jwt-auth.guard';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';

@ApiTags('products')
@Controller('products')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)

export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    try {
      const result = await this.productsService.create(createProductDto);;
      return new ResponseDTO('Created new Products.', result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const Products = await this.productsService.findAll();
      return new ResponseDTO('List of Products available.', Products, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const Products = await this.productsService.findOne(id);;
      return new ResponseDTO('List of Products available.', Products, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const Result = await this.productsService.update(id, updateProductDto);
      return new ResponseDTO('Updated Products.', Result, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }
}
