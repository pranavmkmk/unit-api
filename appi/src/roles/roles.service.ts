import { ConflictException ,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IRoles } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectModel('Roles') private readonly rolesModel: Model<IRoles>
  ){}
  async create(createRoleDto: CreateRoleDto): Promise<IRoles>  {
    const result = new this.rolesModel(createRoleDto);
    return await result.save();
  }

  async findAll() {
      const result = await this.rolesModel.find({ isDeleted: false });
      return result;
  }

  async findOne(ID: string) {
    const result = await this.rolesModel.findById(ID).exec();;
    return result;
  }

  async update(ID: string, updateRoleDto: UpdateRoleDto) {
    const result = await this.rolesModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('role not found');
    }

    await this.rolesModel.findByIdAndUpdate(ID, updateRoleDto).exec();
    return await this.rolesModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
