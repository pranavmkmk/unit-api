import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IPermisssions } from './entities/permission.entity';
import { Model } from 'mongoose';

@Injectable()
export class PermissionsService {

constructor(
  @InjectModel('Permissions') private readonly permissionsModel: Model<IPermisssions>
){}
async findAll() {
    const result = await this.permissionsModel.find({ isActive: true, isDeleted: false });
    return result;
}

async findOne(ID: string) {
  const result = await this.permissionsModel.findById(ID).exec();;
  return result;
}


}
