import { PartialType } from '@nestjs/swagger';
import { CreateServiceSubCategoryDto } from './create-service-sub-category.dto';

export class UpdateServiceSubCategoryDto extends PartialType(CreateServiceSubCategoryDto) {}
