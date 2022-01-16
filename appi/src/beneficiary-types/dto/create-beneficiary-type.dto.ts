import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    IsMongoId,
    IsArray,
    ArrayMinSize,
    ArrayMaxSize,
    IsBoolean,
    IsObject,
    ValidateNested

} from 'class-validator';
import { Schema } from 'mongoose';

export class CreateBeneficiaryTypeDto {

    @ApiProperty({
        description: 'Name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'description',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly description: string;

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