import { PartialType } from '@nestjs/swagger';
import { CreateBeneficiaryTypeDto } from './create-beneficiary-type.dto';

export class UpdateBeneficiaryTypeDto extends PartialType(CreateBeneficiaryTypeDto) {}
