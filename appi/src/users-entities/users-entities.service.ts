import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsersEntityDto } from './dto/create-users-entity.dto';
import { UpdateUsersEntityDto } from './dto/update-users-entity.dto';
import { UsersEntity } from './entities/users-entity.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersEntitiesService {
  constructor(
    @InjectModel('UsersEntity') private readonly userEntityModel: Model<UsersEntity>) { }

  async create(createUsersEntityDto: CreateUsersEntityDto): Promise<UsersEntity> {
    const result = new this.userEntityModel(createUsersEntityDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.userEntityModel.find({ isActive: true, isDeleted: false })
    .populate('usersId')
    .populate('entityId');
    
    return result;
  }

  async findOne(ID: string) {
    const result = await this.userEntityModel.findById(ID).exec();;
    return result;
  }

  async update(ID: string, updateUsersEntityDto: UpdateUsersEntityDto) {
    const result = await this.userEntityModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.userEntityModel.findByIdAndUpdate(ID, updateUsersEntityDto).exec();
    return await this.userEntityModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} usersEntity`;
  }
}
