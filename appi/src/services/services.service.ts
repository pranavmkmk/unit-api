import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { Model } from 'mongoose';

@Injectable()
export class ServicesService {

  constructor(@InjectModel('Service') private readonly serviceModel: Model<Service>,) { }

  async create(createServiceDto: CreateServiceDto) {
    const newService = await this.serviceModel.create(createServiceDto);
    return newService.save();
  }

  async findAll() {
    const service = await this.serviceModel.find()
      .populate({ path: 'serviceSubCategoriesId', select: '_id name' })
      .populate({ path: 'serviceCategoriesId', select: '_id name' })
      .populate({ path: 'serviceProvidersId', select: '_id name' })
      .populate({ path: 'productsId', select: '_id name' });

    return service;
  }

  async findOne(id: any) {
    const service = await this.serviceModel.findById(id)
      .populate({ path: 'serviceSubCategoriesId', select: '_id name' })
      .populate({ path: 'serviceCategoriesId', select: '_id name' })
      .populate({ path: 'serviceProvidersId', select: '_id name' })
      .populate({ path: 'productsId', select: '_id name' });

    return service;
  }

  async update(id: any, updateServiceDto: UpdateServiceDto) {
    const result = await this.serviceModel.findById(id).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }
    const newApiConfig = await this.serviceModel.findByIdAndUpdate(id, updateServiceDto, { new: true });
    return newApiConfig;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
