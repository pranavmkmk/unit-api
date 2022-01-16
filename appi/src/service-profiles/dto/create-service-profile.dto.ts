import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
    IsObject,
    IsOptional,
    ValidateNested,
    IsMongoId,
    IsArray,
    ArrayMinSize,
    ArrayMaxSize,
    IsIn,
    IsNumber,
    Equals

} from 'class-validator';
import { Schema } from 'mongoose';

export class FeeStructureFlatDTO {
    @ApiProperty({
        description: 'Type',
        type: String,
        required: true
    })
    @IsString()
    @Equals(["flat"])
    @IsNotEmpty()
    readonly type: String;

    @ApiProperty({
        description: 'value',
        type: Number,
        required: true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly value: Number;

}
export class MinMaxPercentValueDTO {
    @ApiProperty({
        description: 'Min',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly min: Number;

    @ApiProperty({
        description: 'Max',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly max: Number;

    @ApiProperty({
        description: 'Percent',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly percent: Number;

    @ApiProperty({
        description: 'fee',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly fee: Number;

}

export class FeeStructureMinMaxPercentDTO {
    @ApiProperty({
        description: 'Type',
        type: String,
        required: true
    })
    @IsString()
    @Equals(["min-max-percent"])
    @IsNotEmpty()
    readonly type: String;

    @ApiProperty({
        description: 'value',
        type: MinMaxPercentValueDTO,
        required: true
    })
    @IsArray()
    @IsNotEmpty()
    readonly value: [MinMaxPercentValueDTO];

}

export class TierValueDTO {
    @ApiProperty({
        description: 'From',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly from: Number;

    @ApiProperty({
        description: 'To',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly to: Number;

    @ApiProperty({
        description: 'fee',
        type: Number,
        required:true
    })
    @IsNumber()
    @IsNotEmpty()
    readonly fee: Number;

}
export class FeeStructureTierDTO {
    @ApiProperty({
        description: 'Type',
        type: String,
        required: true
    })
    @IsString()
    @Equals(["tiered"])
    @IsNotEmpty()
    readonly type: String;

    @ApiProperty({
        description: 'value',
        type: TierValueDTO,
        required: true
    })
    @IsArray()
    @IsNotEmpty()
    readonly value: TierValueDTO;

}

export class FeeDTO {
    @ApiProperty({
        description: 'Type',
        type: String,
        required: true
    })
    @IsString()
    @IsIn(['customer','uni_pay','third_party'])
    @IsNotEmpty()
    readonly type: String;

    @ApiProperty({
        description: 'Fee-Structure',
        type: [FeeStructureFlatDTO || FeeStructureTierDTO || FeeStructureMinMaxPercentDTO ] ,
        required: true
    })
    @IsArray()
    @ValidateNested()
    @ArrayMaxSize(3)
    @IsNotEmpty()
    readonly fee_structure: [FeeStructureFlatDTO | FeeStructureTierDTO | FeeStructureMinMaxPercentDTO ];
} 
export class ServicesDTO {
    @ApiProperty({
        description: 'Service ID',
        type: Schema.Types.ObjectId,
        required: true
    })
    @IsMongoId()
    @IsNotEmpty()
    readonly serviceId: Schema.Types.ObjectId;

    @ApiProperty({
        description: 'Service Name',
        type: String,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'Fee ',
        type: FeeDTO,
        required: true
    })
    @IsArray()
    @ValidateNested()
    @ArrayMaxSize(3)
    @IsNotEmpty()
    readonly fee: [FeeDTO];

}

export class CreateServiceProfileDto {
    @ApiProperty({
        description: 'name of the Profile',
        type: String,
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'services',
        type: ServicesDTO,
        required: true,
        example:[
            {
              "serviceId": "61d6acababd34fa8b63f895d",
              "name": "service123",
              "fee": {
                "type": "customer",
                "fee_structure": [
                  {
                    "type": "flat",
                    "value": 12
                  },
                  {
                    "type": "min-max-percent",
                    "value": [
                      {
                        "min": 12,
                        "max": 50,
                        "percent": 10,
                        "fee": 25
                      },
                      {
                        "min": 12,
                        "max": 50,
                        "percent": 10,
                        "fee": 25
                      }
                    ]
                  },
                  {
                    "type": "tiered",
                    "value": [
                      {
                        "from": 12,
                        "to": 50,
                        "fee": 25
                      },
                      {
                        "from": 12,
                        "to": 50,
                        "fee": 25
                      }
                    ]
                  }
                ]
              }
            }
          ]
    
    })
    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    readonly services: [ServicesDTO];
}