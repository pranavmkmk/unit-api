import { ConflictException, Injectable } from '@nestjs/common';
import { CreateServiceSubCategoryDto } from './dto/create-service-sub-category.dto';
import { UpdateServiceSubCategoryDto } from './dto/update-service-sub-category.dto';
import { Model } from 'mongoose';
import { ServiceSubCategory } from './entities/service-sub-category.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServiceSubCategoriesService {

  constructor(@InjectModel('ServiceSubCategory') private readonly serviceSubCategoryModel: Model<ServiceSubCategory>,) { }

  async create(createServiceSubCategoryDto: CreateServiceSubCategoryDto) {

    const exist = await this.serviceSubCategoryModel.findOne({ name: createServiceSubCategoryDto.name })
    if (exist) {
      throw new ConflictException('Name Already Exists');
    }
    const newServiceSubCategory = await this.serviceSubCategoryModel.create(createServiceSubCategoryDto);
    return newServiceSubCategory.save();
  }

  async findAll() {
    const serviceSubCategory = await this.serviceSubCategoryModel.find({ isDeleted: false })
      .populate({ path: 'serviceCategoryId', select: '_id name' });
    return serviceSubCategory;
  }

  async findOne(ID: any) {
    const serviceSubCategory = await this.serviceSubCategoryModel.findById(ID)
      .populate({ path: 'serviceCategoryId', select: '_id name' });
    return serviceSubCategory;
  }

  async update(id: any, updateServiceSubCategoryDto: UpdateServiceSubCategoryDto) {
    const result = await this.serviceSubCategoryModel.findById(id).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }
    const serviceSubCategory = await this.serviceSubCategoryModel.findByIdAndUpdate(id, updateServiceSubCategoryDto, { new: true });
    return serviceSubCategory;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceSubCategory`;
  }
}
