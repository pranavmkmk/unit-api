import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProducts } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productsModel: Model<IProducts>
  ) { }
  async create(createProductDto: CreateProductDto): Promise<IProducts> {
    const result = new this.productsModel(createProductDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.productsModel.find({ isDeleted: false })
      .populate({ path: 'serviceSubCategoriesId', select: '_id name' })
      .populate({ path: 'serviceCategoriesId', select: '_id name' });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.productsModel.findById(ID)
    .populate({ path: 'serviceSubCategoriesId', select: '_id name' })
    .populate({ path: 'serviceCategoriesId', select: '_id name' });
    return result;
  }

  async update(ID: string, updateProductDto: UpdateProductDto) {
    const result = await this.productsModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('role not found');
    }
    await this.productsModel.findByIdAndUpdate(ID, updateProductDto).exec();
    return await this.productsModel.findById(ID).exec();
  }

}
