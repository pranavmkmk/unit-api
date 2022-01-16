import { PartialType } from '@nestjs/swagger';
import { CreateUsersEntityDto } from './create-users-entity.dto';

export class UpdateUsersEntityDto extends PartialType(CreateUsersEntityDto) {}
