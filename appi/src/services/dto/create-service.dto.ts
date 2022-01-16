import { ObjectId } from "mongoose";
import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsObject,
    IsMongoId,
    IsArray,
    ArrayMinSize,
    ArrayMaxSize

} from 'class-validator';
import { Schema } from 'mongoose';
export class CreateServiceDto {

    @ApiProperty({
        description: 'name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
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
    readonly serviceSubCategoriesId: ObjectId;

    @ApiProperty({
        description: 'serviceProvidersId',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    @IsNotEmpty()
    readonly serviceProvidersId: ObjectId;

    @ApiProperty({
        description: 'productsId',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    @IsNotEmpty()
    readonly productsId: ObjectId;

    @ApiProperty({
        description: 'integrations',
        type: Array,
        required: true
    })
    @IsArray()
    @IsNotEmpty()
    readonly integrations: Array<any>;

    @ApiProperty({
        description: 'isActive',
        type: Boolean,
    })
    @IsBoolean()
    readonly isActive: Boolean;

    @ApiProperty({
        description: 'isDeleted',
        type: Boolean,
    })
    @IsBoolean()
    readonly isDeleted: Boolean;

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
