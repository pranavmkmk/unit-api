import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from './entities/beneficiary.entity';
import { Model } from 'mongoose';

@Injectable()
export class BeneficiariesService {
  constructor(
    @InjectModel('Beneficiary') private readonly BeneficiaryModel: Model<Beneficiary>
  ) { }

  async create(createBeneficiaryDto: CreateBeneficiaryDto) {
    const exist = await this.BeneficiaryModel.findOne({ name: createBeneficiaryDto.name })
    if (exist) {
      throw new ConflictException('Name Already Exists');
    }
    const result = new this.BeneficiaryModel(createBeneficiaryDto);
    return await result.save();
  }

  async findAll() {
    const result = await this.BeneficiaryModel.find({ isActive: true, isDeleted: false })
      .populate({ path: 'benefiaciaryTypeId', select: '_id name' })
      .populate({ path: 'usersId', select: '_id firstName lastName username' })
      .populate({ path: 'entityId', select: '_id name' });

    return result;
  }

  async findOne(ID: string) {
    const result = await this.BeneficiaryModel.findById(ID)
      .populate({ path: 'benefiaciaryTypeId', select: '_id name' })
      .populate({ path: 'usersId', select: '_id firstName lastName username' })
      .populate({ path: 'entityId', select: '_id name' });

    return result;
  }

  async update(ID: string, updateBeneficiaryDto: UpdateBeneficiaryDto) {
    const result = await this.BeneficiaryModel.findById(ID).exec();

    if (!result?._id) {
      throw new ConflictException('Not found');
    }

    await this.BeneficiaryModel.findByIdAndUpdate(ID, updateBeneficiaryDto).exec();
    return await this.BeneficiaryModel.findById(ID).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiary`;
  }
}
