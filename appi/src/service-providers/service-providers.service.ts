import { ConflictException, Injectable } from '@nestjs/common';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { Model } from 'mongoose';
import { ServiceProvider } from './entities/service-provider.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServiceProvidersService {

  constructor(@InjectModel('ServiceProvider') private readonly serviceProviderModel: Model<ServiceProvider>,) { }

  async create(createServiceProviderDto: CreateServiceProviderDto) {
    const newServiceProvider = await this.serviceProviderModel.create(createServiceProviderDto);
    return newServiceProvider.save();
  }

  async findAll() {
    const serviceProvider = await this.serviceProviderModel.find();
    return serviceProvider;
  }

  async findOne(id: string) {
    const serviceProvider = await this.serviceProviderModel.findById(id).exec();
    return serviceProvider;
  }

  async update(id: any, updateServiceProviderDto: UpdateServiceProviderDto) {
    const result = await this.serviceProviderModel.findById(id).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }
    const serviceProvider = await this.serviceProviderModel.findByIdAndUpdate(id,updateServiceProviderDto,{ new: true });
    return serviceProvider;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceProvider`;
  }
}
