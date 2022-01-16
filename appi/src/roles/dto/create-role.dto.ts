import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
  IsMongoId,
  IsArray,
  ArrayMinSize,

} from 'class-validator';
import { Schema } from 'mongoose';
export class PermissionsDTO {
    @ApiProperty({
        description: 'Permissions ID',
        type: Schema.Types.ObjectId,
        required:true
    })
    @IsMongoId()
    @IsNotEmpty()
    readonly id: Schema.Types.ObjectId;

    @ApiProperty({
      description: 'Permission Name',
      type: String,
      required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
    description: 'Access ',
    type: Boolean,
    required:true
    })
    @IsNotEmpty()
    readonly access: boolean;

    @ApiProperty({
    description: 'Authorize',
    type: Boolean,
    required:true
    })
    @IsNotEmpty()
    readonly authorize: boolean;

    @ApiProperty({
    description: 'Create',
    type: Boolean,
    required:true
    })
    @IsNotEmpty()
    readonly create: boolean;

    @ApiProperty({
    description: 'View',
    type: Boolean,
    required:true
    })
    @IsNotEmpty()
    readonly view: boolean;

    @ApiProperty({
    description: 'Edit',
    type: Boolean,
    required:true
    })
    @IsNotEmpty()
    readonly edit: boolean;

    @ApiProperty({
    description: 'Delete',
    type: String,
    required:true
    })
    @IsNotEmpty()
    readonly delete: string;
  }

export class CreateRoleDto {
    @ApiProperty({
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

      @ApiProperty({
        description: 'Permissions of a role',
        type: PermissionsDTO,
        required:true,
        example:[
            {
              "id": "",
              "name": "Entity Onboarding",
              "access": true,
              "authorize": true,
              "create": true,
              "view": true,
              "edit": true,
              "delete": true
            }
          ]
      })
      @IsNotEmpty()
      @IsArray()
      @ArrayMinSize(1)
      @ValidateNested()
      readonly permissions: [PermissionsDTO];
}

