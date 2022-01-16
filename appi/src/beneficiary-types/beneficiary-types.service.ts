import { ConflictException, Injectable } from '@nestjs/common';
import { CreateBeneficiaryTypeDto } from './dto/create-beneficiary-type.dto';
import { UpdateBeneficiaryTypeDto } from './dto/update-beneficiary-type.dto';
import { BeneficiaryType } from './entities/beneficiary-type.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BeneficiaryTypesService {

  constructor(
    @InjectModel('BeneficiaryType') private readonly beneficiaryTypeModel: Model<BeneficiaryType>
  ) { }

  async create(createBeneficiaryTypeDto: CreateBeneficiaryTypeDto) {
    const result = new this.beneficiaryTypeModel(createBeneficiaryTypeDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.beneficiaryTypeModel.find({ isActive: true, isDeleted: false });
    return result;
  }

  async findOne(ID: string) {
    const result = await this.beneficiaryTypeModel.findById(ID).exec();
    return result;
  }

  async update(ID: string, updateBeneficiaryTypeDto: UpdateBeneficiaryTypeDto) {
    const result = await this.beneficiaryTypeModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.beneficiaryTypeModel.findByIdAndUpdate(ID, updateBeneficiaryTypeDto).exec();
    return await this.beneficiaryTypeModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiaryType`;
  }
}
