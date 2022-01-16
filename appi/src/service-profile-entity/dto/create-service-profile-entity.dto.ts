import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    IsMongoId,
    IsArray,
  
  } from 'class-validator';
import { Schema } from 'mongoose';
export class CreateServiceProfileEntityDto {

    @ApiProperty({
        description: 'serviceProfileID',
        type: Array,
        example: ["61d487b25447240d56627372"],
    })
    @IsMongoId()
    readonly serviceProfileID: Array<any>;

    @ApiProperty({
        description: 'entityId',
        type: Schema.Types.ObjectId,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    readonly entityId: Schema.Types.ObjectId;
}
