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
export class CreateServiceSubCategoryDto {

    @ApiProperty({
        description: 'name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'descriptions',
        type: String,
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly descriptions: string;

    @ApiProperty({
        description: 'serviceCategoryId',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",
    })
    @IsNotEmpty()
    @IsMongoId()
    readonly serviceCategoryId: Schema.Types.ObjectId;

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