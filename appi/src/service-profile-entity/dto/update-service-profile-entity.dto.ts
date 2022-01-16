import { PartialType } from '@nestjs/swagger';
import { CreateServiceProfileEntityDto } from './create-service-profile-entity.dto';

export class UpdateServiceProfileEntityDto extends PartialType(CreateServiceProfileEntityDto) {}
