import { PartialType } from '@nestjs/swagger';
import { CreateAccountProviderDto } from './create-account-provider.dto';

export class UpdateAccountProviderDto extends PartialType(CreateAccountProviderDto) {}
