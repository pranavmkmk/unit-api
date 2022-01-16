import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './entities/user.entity'

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('Users') private readonly usersModel: Model<IUsers>
  ) {
  }
  async create(createUserDto: CreateUserDto): Promise<IUsers> {
    const result = new this.usersModel(createUserDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.usersModel.find({ isDeleted: false })
      .populate({ path: 'permissions.id', select: '_id name' })
      .populate({ path: 'entityId', select: '_id name' });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.usersModel.findById(ID)
      .populate({ path: 'permissions.id', select: '_id name' })
      .populate({ path: 'entityId', select: '_id name' })
    return result;
  }

  async update(ID: string, updateUserDto: UpdateUserDto) {
    const result = await this.usersModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('role not found');
    }

    await this.usersModel.findByIdAndUpdate(ID, updateUserDto).exec();
    return await this.usersModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
