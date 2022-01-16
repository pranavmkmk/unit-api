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

export class CreateAccountProviderDto {

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
}
