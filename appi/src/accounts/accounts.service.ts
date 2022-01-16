import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Model } from 'mongoose';

@Injectable()
export class AccountsService {

  constructor(
    @InjectModel('Accounts') private readonly accountModel: Model<Account>
  ) { }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const result = new this.accountModel(createAccountDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.accountModel.find()
      .populate({ path: 'accountTypesId', select: '_id name' })
      .populate({ path: 'usersId', select: '_id firstName lastName username' })
      .populate({ path: 'entityId', select: '_id name' })
      .populate({ path: 'accountProvidersId', select: '_id name' });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.accountModel.findById(ID)
      .populate({ path: 'accountTypesId', select: '_id name' })
      .populate({ path: 'usersId', select: '_id firstName lastName username' })
      .populate({ path: 'entityId', select: '_id name' })
      .populate({ path: 'accountProvidersId', select: '_id name' });
    return result;
  }

  async update(ID: string, updateAccountDto: UpdateAccountDto) {
    const result = await this.accountModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.accountModel.findByIdAndUpdate(ID, updateAccountDto).exec();
    return await this.accountModel.findById(ID).exec()
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
