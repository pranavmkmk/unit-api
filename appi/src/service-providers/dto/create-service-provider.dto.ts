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

export class CreateServiceProviderDto {

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
        description: 'integrations',
        type: Object,
        required: true
    })
    @IsNotEmpty()
    @IsObject()
    readonly integrations: Object;

    @ApiProperty({
        description: 'documents',
        type: Array,
        required: true
    })
    @IsNotEmpty()
    @IsArray()
    readonly documents: Array<any>;

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