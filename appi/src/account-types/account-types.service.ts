import { ConflictException,Injectable } from '@nestjs/common';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { UpdateAccountTypeDto } from './dto/update-account-type.dto';
import { AccountType } from './entities/account-type.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountTypesService {
  constructor(
    @InjectModel('AccountType') private readonly AccountTypeModel: Model<AccountType>
  ){}

  async create(createAccountTypeDto: CreateAccountTypeDto): Promise<AccountType>{
    const result = new this.AccountTypeModel(createAccountTypeDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.AccountTypeModel.find();
    return result;
  }

  async findOne(ID: string) {
    const result = await this.AccountTypeModel.findById(ID).exec();
    return result;
  }

  async update(ID: string, updateAccountTypeDto: UpdateAccountTypeDto) {
    const result = await this.AccountTypeModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.AccountTypeModel.findByIdAndUpdate(ID, updateAccountTypeDto).exec();
    return await this.AccountTypeModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} accountType`;
  }
}
