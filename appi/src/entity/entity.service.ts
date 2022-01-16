import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { Entity } from './entities/entity.entity';
import { Model } from 'mongoose';

@Injectable()
export class EntityService {
  constructor(
    @InjectModel('Entity') private readonly entityModel: Model<Entity>
  ) { }

  async create(createEntityDto: CreateEntityDto): Promise<Entity> {
    const result = new this.entityModel(createEntityDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.entityModel.find({ isActive: true, isDeleted: false });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.entityModel.findById(ID).exec();
    return result;
  }

  async update(ID: string, updateEntityDto: UpdateEntityDto) {
    const result = await this.entityModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.entityModel.findByIdAndUpdate(ID, updateEntityDto).exec();
    return await this.entityModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
