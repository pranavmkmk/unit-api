import { ConflictException ,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountProviderDto } from './dto/create-account-provider.dto';
import { UpdateAccountProviderDto } from './dto/update-account-provider.dto';
import { IAccountProviders } from './entities/account-provider.entity'

@Injectable()
export class AccountProvidersService {
  constructor(
    @InjectModel('AccountProviders') private readonly accountProvidersModel: Model<IAccountProviders>
  ){}

  async create(createAccountProviderDto: CreateAccountProviderDto) {
    const result = new this.accountProvidersModel(createAccountProviderDto);
    return await result.save();
  }

async findAll() {
    const result = await this.accountProvidersModel.find({ isDeleted: false });
    return result;
}

async findOne(ID: string) {
  const result = await this.accountProvidersModel.findById(ID).exec();;
  return result;
}

async update(ID: string, updateAccountProviderDto: UpdateAccountProviderDto) {
  const result = await this.accountProvidersModel.findById(ID).exec();

  if (!result?._id) {
    throw new ConflictException('account provider not found');
  }

  await this.accountProvidersModel.findByIdAndUpdate(ID, updateAccountProviderDto).exec();
  return await this.accountProvidersModel.findById(ID).exec();
}
  remove(id: any) {
    return `This action removes a #${id} accountProvider`;
  }
}
