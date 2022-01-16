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

export class CreateUsersEntityDto {

    @ApiProperty({
        description: 'usersId',
        type: Schema.Types.ObjectId,
        required:true,
        example: "61d487b25447240d56627372"
    })
    @IsString()
    @IsNotEmpty()
    readonly usersId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'entityId',
        type: Schema.Types.ObjectId,
        required:true,
        example: "61d487b25447240d56627372"
    })
    @IsString()
    @IsNotEmpty()
    readonly entityId: Schema.Types.ObjectId;

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
        description: 'onSms',
        type: Boolean,
    })
    @IsBoolean()
    readonly onSms: Boolean;

    @ApiProperty({
        description: 'onPush',
        type: Boolean,
    })
    @IsBoolean()
    readonly onPush: Boolean;

    @ApiProperty({
        description: 'onEmail',
        type: Boolean,
    })
    @IsBoolean()
    readonly onEmail: Boolean;

    @ApiProperty({
        description: 'createdBy',
        type: Schema.Types.ObjectId,
        example: "61d487b25447240d56627372",
    })
    @IsMongoId()
    readonly createdBy: Schema.Types.ObjectId;

}
