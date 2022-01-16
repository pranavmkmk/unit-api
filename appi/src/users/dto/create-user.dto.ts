import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
  ValidateNested,
  IsMongoId,
  IsArray,
  ArrayMinSize,
  IsEmail,
  Matches,
  IsObject

} from 'class-validator';
import { Schema } from 'mongoose';

export class RolesDTO {
  @ApiProperty({
    description: 'Roles Id',
    type: Schema.Types.ObjectId,
    example: "61d487b25447240d56627372",
  })
  @IsMongoId()
  @IsNotEmpty()
  readonly id: Schema.Types.ObjectId;
}
export class AddressUserDTO {
  @ApiProperty({
    description: 'Location/locality of user',
    maximum: 40,
    type: String,
  })
  @IsString()
  @IsOptional()
  @MaxLength(40)
  readonly location: string;

  @ApiProperty({
    description: 'city of location',
    maximum: 40,
    type: String,
  })
  @IsString()
  @IsOptional()
  @MaxLength(40)
  readonly city: string;

  @ApiProperty({
    description: 'State',
    maximum: 40,
    type: String,
  })
  @IsString()
  @IsOptional()
  @MaxLength(40)
  readonly state: string;

  @ApiProperty({
    description: 'pincode',
    maximum: 10,
    type: String,
  })
  @IsString()
  @IsOptional()
  @MaxLength(10)
  readonly pincode: string;

  @ApiProperty({
    description: 'Address Line',
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly addressLine: string;

  @ApiProperty({
    description: 'Address Line2',
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly addressLine2: string;

  @ApiProperty({
    description: 'P.O Box',
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly PO_box: string;

}
export class onBehalfDataDTO {
  @ApiProperty({
    description: 'merchant name',
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly merchantName!: string;

}

export class parentDataDTO {
  @ApiProperty({
    description: 'parent name',
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly parentName!: string;
}

export class CreateUserDto {
  @ApiProperty({
    description: 'First Name of user',
    maximum: 60,
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  readonly firstName: string;

  @ApiProperty({
    description: 'lastName of the user',
    maximum: 60,
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly lastName: string;

  @ApiProperty({
    description: 'middleName of the user',
    type: String,
    maximum: 60,
  })
  @IsString()
  @IsOptional()
  readonly middleName: string;

  @ApiProperty({
    description: 'Address of user',
    type: AddressUserDTO,
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsOptional()
  @ValidateNested()
  readonly address: [AddressUserDTO];

  @ApiProperty({
    description: 'Date of Birth',
    type: Date,
  })
  @IsOptional()
  readonly dob!: Date;

  @ApiProperty({
    description: 'entityId',
    type: Schema.Types.ObjectId,
    example: "61d487b25447240d56627372",
  })
  @IsMongoId()
  @IsOptional()
  readonly entityId: Schema.Types.ObjectId;

  @ApiProperty({
    description: 'Email of user',
    type: String,
  })
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @ApiProperty({
    description: 'Mobile number of the user',
    minimum: 6,
    maximum: 16,
    type: String,
    required: true,
    example: '9539168059',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  @Matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, { message: 'Invalid mobile number' })
  readonly mobileNumber: string = '';

  @ApiProperty({
    description: 'Password',
    type: String,
    example: 'Change_Me!',
  })
  @IsString()
  @IsOptional()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password too weak' })
  password: string;

  @ApiProperty({
    description: 'Emirates ID',
    type: String,
  })
  @IsString()
  @IsOptional()
  readonly emiratesId: string;

  @ApiProperty({
    description: 'Username of user',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    description: 'createdBy',
    type: Schema.Types.ObjectId,
    example: "61d487b25447240d56627372",
  })
  @IsMongoId()
  readonly createdBy: Schema.Types.ObjectId;

  @ApiProperty({
    description: 'Permissions of a role',
    type: RolesDTO,
    required: true,
    example: [
      {
        "id": "61d487b25447240d56627372"
      }
    ]
  })
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  readonly permissions: [RolesDTO];

  @ApiProperty({
    description: 'ParentData',
    type: parentDataDTO,
    required: false,
  })
  @IsObject()
  @IsOptional()
  readonly parentData!: parentDataDTO;

  @ApiProperty({
    description: 'on behalf data',
    type: onBehalfDataDTO,
    required: false,
  })
  @IsObject()
  @IsOptional()
  readonly onBehalfData!: onBehalfDataDTO;


}

// segment enum
// channels array
// username varchar
// roles array //
// languages array 
// documents array
// isActive boolean  
// isDeleted boolean
// isVerified boolean
// onSms boolean 
// onEmail boolean 
// onPush boolean 
// isChild boolean
// parentData object
// createdBy int 
// updatedBy int
