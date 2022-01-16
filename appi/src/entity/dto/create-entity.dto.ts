import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsBoolean

} from 'class-validator';
import { Schema } from 'mongoose';

export class CreateEntityDto {

    @ApiProperty({
        description: 'Name',
        type: String,
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'legal_name',
        type: String,
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly legal_name: string;

    @ApiProperty({
        description: 'secretKey',
        type: String,
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly secretKey :string;

    @ApiProperty({
        description: 'documents',
        type: Array,
        required:true
    })
    @IsArray()
    @IsNotEmpty()
    readonly documents :Array<any>;

    @ApiProperty({
        description: 'logo',
        type: String,
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly logo :string;

    @ApiProperty({
        description: 'branding',
        type: Array,
        required:true
    })
    @IsArray()
    @IsNotEmpty()
    readonly branding :Array<any>;

    @ApiProperty({
        description: 'services',
        type: Array,
        required:true
    })
    @IsArray()
    @IsNotEmpty()
    readonly services :Array<any>;

    @ApiProperty({
        description: 'appData',
        type: Array,
        required:true
    })
    @IsArray()
    @IsNotEmpty()
    readonly appData :Array<any>;

    @ApiProperty({
        description: 'isActive',
        type: Boolean,
    })
    @IsBoolean()
    readonly isActive: Boolean;

    @ApiProperty({
        description: 'isDeleted',
        type: Boolean,
        example: false
    })
    @IsBoolean()
    readonly isDeleted: Boolean;

    @ApiProperty({
        description: 'isVerified',
        type: Boolean,
    })
    @IsBoolean()
    readonly isVerified: Boolean;

    @ApiProperty({
        description: 'createdBy',
        type: Schema.Types.ObjectId,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    readonly createdBy: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'updatedBy',
        type: Schema.Types.ObjectId,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    readonly updatedBy: Schema.Types.ObjectId;

}
