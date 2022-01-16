import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {    @ApiProperty({
    description: 'name of the role',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string = '';

  @ApiProperty({
    description: 'Code',
    minimum: 4,
    maximum: 12,
    type: String,
    required: true,
    example: 'admn',
  })
  @IsString()
  @MinLength(4, { message: 'Code must be longer than or equal to 12 characters' })
  @MaxLength(12)
  @IsNotEmpty()
  readonly code: string;
}