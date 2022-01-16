import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsMongoId,

} from 'class-validator';
import { Schema } from 'mongoose';

export class CreateAccountDto {
    @ApiProperty({
        description: 'Account Number',
        type: String,
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly accountNumber :string;

    @ApiProperty({
        description: 'Account Type',
        type: Schema.Types.ObjectId,
        required:true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly accountTypesId :Schema.Types.ObjectId;

    @ApiProperty({
        description: 'User ID',
        type: Schema.Types.ObjectId,
        required:true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly usersId :Schema.Types.ObjectId;

    @ApiProperty({
        description: 'accountProviders ID',
        type: Schema.Types.ObjectId,
        required:true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly accountProvidersId :Schema.Types.ObjectId;

    @ApiProperty({
        description: 'Entity ID',
        type: Schema.Types.ObjectId,
        required:true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly entityId :Schema.Types.ObjectId;

    @ApiProperty({
        description: 'Currency',
        type: String,
        required:true
    })
    @IsString()
    @IsNotEmpty()
    readonly currency :string;


}