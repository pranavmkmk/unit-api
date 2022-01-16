import { ConflictException, Injectable } from '@nestjs/common';
import { CreateServiceProfileEntityDto } from './dto/create-service-profile-entity.dto';
import { UpdateServiceProfileEntityDto } from './dto/update-service-profile-entity.dto';
import { ServiceProfileEntity } from './entities/service-profile-entity.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServiceProfileEntityService {

  constructor(
    @InjectModel('ServiceProfileEntity') private readonly serviceprofileEntityModel: Model<ServiceProfileEntity>
  ) { }

  async create(createServiceProfileEntityDto: CreateServiceProfileEntityDto) {
    const result = new this.serviceprofileEntityModel(createServiceProfileEntityDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.serviceprofileEntityModel.find({ isActive: true, isDeleted: false })
      .populate({ path: 'entityId', select: '_id name legal_name' });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.serviceprofileEntityModel.findById(ID)
      .populate({ path: 'entityId', select: '_id name legal_name' });
    return result;
  }

  async update(ID: string, updateServiceProfileEntityDto: UpdateServiceProfileEntityDto) {
    const result = await this.serviceprofileEntityModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.serviceprofileEntityModel.findByIdAndUpdate(ID, updateServiceProfileEntityDto).exec();
    return await this.serviceprofileEntityModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} serviceProfileEntity`;
  }
}
