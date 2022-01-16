import { PartialType } from '@nestjs/swagger';
import { CreateServiceProfileDto } from './create-service-profile.dto';

export class UpdateServiceProfileDto extends PartialType(CreateServiceProfileDto) {}
