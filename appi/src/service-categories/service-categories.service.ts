import { Injectable,ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { Model } from 'mongoose';
import { ServiceCategory } from './entities/service-category.entity';

@Injectable()
export class ServiceCategoriesService {

  constructor(@InjectModel('ServiceCategory') private readonly serviceCategoryModel: Model<ServiceCategory>,) { }
  
  async create(createServiceCategoryDto: CreateServiceCategoryDto) {
    const exist = await this.serviceCategoryModel.findOne({name:createServiceCategoryDto.name})

    if (exist) {
      throw new ConflictException('Name Already Exists');
    }
    const newServiceCategory = await this.serviceCategoryModel.create(createServiceCategoryDto);
    return newServiceCategory.save();
  }

  async findAll() {
    const serviceCategory = await this.serviceCategoryModel.find({isDeleted: false});

    return serviceCategory;
  }

  async findOne(id: string) {

    const serviceCategory = await this.serviceCategoryModel.findById(id).exec();
    return serviceCategory;
  }

  async update(id: any, updateServiceCategoryDto: UpdateServiceCategoryDto) {
    const result = await this.serviceCategoryModel.findById(id).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }
    const serviceCategory = await this.serviceCategoryModel.findByIdAndUpdate(id,updateServiceCategoryDto,{ new: true });
    return serviceCategory;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceCategory`;
  }
}
