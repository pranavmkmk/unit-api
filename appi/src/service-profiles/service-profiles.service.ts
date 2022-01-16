import { ConflictException, Injectable } from '@nestjs/common';
import { CreateServiceProfileDto } from './dto/create-service-profile.dto';
import { UpdateServiceProfileDto } from './dto/update-service-profile.dto';
import { ServiceProfile } from './entities/service-profile.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServiceProfilesService {
  constructor(
    @InjectModel('ServiceProfile') private readonly serviceprofileModel: Model<ServiceProfile>
  ){}
  
  async create(createServiceProfileDto: CreateServiceProfileDto) {
    const result = new this.serviceprofileModel(createServiceProfileDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.serviceprofileModel.find({ isActive: true, isDeleted: false });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.serviceprofileModel.findById(ID).exec();
    return result;
  }

  async update(ID: string, updateServiceProfileDto: UpdateServiceProfileDto) {
    const result = await this.serviceprofileModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.serviceprofileModel.findByIdAndUpdate(ID, updateServiceProfileDto).exec();
    return await this.serviceprofileModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} serviceProfile`;
  }
}
