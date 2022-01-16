
import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    IsMongoId,
    IsArray,
    ArrayMinSize,
    ArrayMaxSize,
    IsBoolean,
    IsOptional

} from 'class-validator';
import { Schema } from 'mongoose';

export class CreateProductDto {

    @ApiProperty({
        description: 'Name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'code',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly code: string;

    @ApiProperty({
        description: 'code',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly hsnCode: string;

    @ApiProperty({
        description: 'documents',
        type: Array,
        required: true
    })
    @IsArray()
    @IsNotEmpty()
    readonly documents: Array<any>;

    @ApiProperty({
        description: 'serviceCategoriesId',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    @IsNotEmpty()
    readonly serviceCategoriesId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'serviceSubCategoriesId',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    @IsNotEmpty()
    readonly serviceSubCategoriesId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'isActive',
        type: Boolean,
    })
    @IsOptional()
    @IsBoolean()
    readonly isActive: Boolean;

    @ApiProperty({
        description: 'isDeleted',
        type: Boolean,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    readonly isDeleted: Boolean;

    @ApiProperty({
        description: 'isVerified',
        type: Boolean,
    })
    @IsOptional()
    @IsBoolean()
    readonly isVerified: Boolean;

}

