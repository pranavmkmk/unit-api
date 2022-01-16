import { Controller, Body, Post, Inject, ValidationPipe, HttpStatus, HttpException, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginWithUsernamePaswrdDto, getAccessTokenUsingRefreshTokenDto, PayloadDto} from './dto/create-auth.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ErrorResponseDTO, ResponseDTO } from '../util/response.util';


@ApiTags('auth')

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    ) {}


  @Post('/login')
    async login(@Body(ValidationPipe) loginDto: loginWithUsernamePaswrdDto, @Request() req) {
      try{
      const token = await this.authService.loginWithUsernamePaswrd(loginDto,req);
      return new ResponseDTO('Successfully logged in.', token, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }

  @Post('/token')
    async token(@Body(ValidationPipe) tokenDto: getAccessTokenUsingRefreshTokenDto, @Request() req) {
      try{
      const token = await this.authService.getAccessTokenUsingRefreshToken(tokenDto, req);
      return new ResponseDTO('New Tokens Issued', token, 200);
    } catch (error) {
      return new ErrorResponseDTO(error);
    }
  }
}
