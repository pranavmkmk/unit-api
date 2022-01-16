import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class loginWithUsernamePaswrdDto {
    @ApiProperty({
      description: 'Username of the User',
      minimum: 4,
      maximum: 12,
      type: String,
      required: true,
    })
    @IsString()
    @MinLength(6)
    @MaxLength(12)
    @IsNotEmpty()
    readonly username: string = '';
  
    @ApiProperty({
      description: 'Password',
      minimum: 6,
      maximum: 16,
      type: String,
      required: true,
      example: 'P@ssw0rd',
    })
    @IsString()
    @MinLength(6, { message: 'Password must be longer than or equal to 6 characters' })
    @MaxLength(18)
    @IsNotEmpty()
    readonly password: string;
  }

  export class getAccessTokenUsingRefreshTokenDto {
    @ApiProperty({
      description: 'Refresh token',
      type: String,
      required: true,
    })
    @IsString()
    @IsNotEmpty()
    readonly refresh_token: string = '';
  }

  export class PayloadDto {
    readonly sub: string = '';
    readonly roles: object = [];
    readonly exp?: number;
    readonly iat?: number;
  }
