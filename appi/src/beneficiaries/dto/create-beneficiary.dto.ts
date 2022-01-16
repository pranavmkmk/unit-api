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

export class AccountDataDTO {

    @ApiProperty({
        description: 'Bank Name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly bankName: string;

    @ApiProperty({
        description: 'Bank Account Number',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly bankAccountNumber: string;

    @ApiProperty({
        description: 'IFSC Code',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly IFSC_code: string;

}

export class CreateBeneficiaryDto {

    @ApiProperty({
        description: 'Name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'fullName',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly fullName: string;

    @ApiProperty({
        description: 'Account Details',
        type: AccountDataDTO,
        required: true,
        example:
        {
            "bankName": "ICIC",
            "bankAccountNumber": "ICIC123",
            "IFSC_code": "ICIC123"
        }
    })
    @IsNotEmpty()
    @IsObject()
    @ValidateNested()
    readonly accountData: [AccountDataDTO];

    @ApiProperty({
        description: 'benefiaciaryTypeId',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly benefiaciaryTypeId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'User ID',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly usersId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'Entity ID',
        type: Schema.Types.ObjectId,
        required: true,
        example: "61d487b25447240d56627372",

    })
    @IsMongoId()
    @IsNotEmpty()
    readonly entityId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'documents',
        type: Array,
        required: true
    })
    @IsArray()
    @IsNotEmpty()
    readonly documents: Array<any>;

    @ApiProperty({
        description: 'isDefault',
        type: Boolean,
    })
    @IsBoolean()
    readonly isDefault: Boolean;

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
