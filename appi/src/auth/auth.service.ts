import { Injectable ,ConflictException, HttpException, HttpStatus, Inject, } from '@nestjs/common';
import { getAccessTokenUsingRefreshTokenDto, loginWithUsernamePaswrdDto,PayloadDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IAuth } from './entities/auth.entity';
import { IAuthService } from './entities/auth.service'
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { sign, verify, decode } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<IAuth>,
    private readonly config: ConfigService
  ){}

  async loginWithUsernamePaswrd(signInDto: loginWithUsernamePaswrdDto, request: any) {
    const { username, password } = signInDto;
    const user = await this.authModel
      .findOne({ username, isActive: true, isDeleted: false })
      .select('username password firstName lastName roles mobileNumber');
      if (!user || !user.password) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }    
      if (await bcrypt.compare(password, user.password)) {
        // const sanitized_user = this.sanitizeAuthInfo(user);
        return this.getTokens(user);
      } else {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
  }

  async getAccessTokenUsingRefreshToken(tokenDto: getAccessTokenUsingRefreshTokenDto, request: any){
    try{
      const {refresh_token } = tokenDto;
      if(this.verifyRefreshToken(refresh_token, 'REFRESH')){
        const decoded = decode(refresh_token, this.config.get('JWT_REFRESH_SECRET_KEY'));
        if (!decoded) {
          throw new Error();
        }
        const user = await this.findUserById(decoded['sub']);
        console.log("user", user)
        if (!user) {
          throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
        }
        // const sanitized_user = this.sanitizeAuthInfo(user);
        return this.getTokens(user);
      }else{
        throw new HttpException('Invalid refresh token 1', HttpStatus.UNAUTHORIZED);
      }
    }catch(e){
      throw new HttpException(e, HttpStatus.UNAUTHORIZED);
    }
    

  }

  async getTokens(auth){
    const payload: PayloadDto = {
      sub: auth._id,
      roles: auth.roles
    };
    const access_token = this.signPayload(payload, 'ACCESS');
    const refresh_token = this.signPayload(payload, 'REFRESH');
    const expires_in = parseInt(this.config.get('ACCESS_TOKEN_EXPIRY'));
    const refresh_expires_in = parseInt(this.config.get('REFRESH_TOKEN_EXPIRY'));
    return {
      access_token, refresh_token, expires_in, refresh_expires_in, "token_type":"Bearer"
    }
  }

  private sanitizeAuthInfo(authInfo: IAuth) {
    if (!authInfo) return null;
    const sanitized = authInfo.toObject();
    // delete sanitized['password'];
    return sanitized;
  }

  private async findUser(options: any): Promise<IAuth> {
    return await this.authModel.findOne(options).exec();
  }

  findUserById(userId: string): Promise<IAuth> {
    return this.findUser({ _id: userId });
  }

  signPayload(payload: PayloadDto, type: string): string {
    const secret = type=='ACCESS' ? this.config.get('JWT_SECRET_KEY') : this.config.get('JWT_REFRESH_SECRET_KEY');
    // console.log(type, secret);
    return sign(payload, secret, { expiresIn:  type=='ACCESS' ? parseInt(this.config.get('ACCESS_TOKEN_EXPIRY')) : parseInt(this.config.get('REFRESH_TOKEN_EXPIRY'))});
  }

  verifyRefreshToken(token: string, type: string): boolean{
    const secret = type=='ACCESS' ? this.config.get('JWT_SECRET_KEY') : this.config.get('JWT_REFRESH_SECRET_KEY')
    try{
      verify(token, secret)
      return true;
    }catch(e){
      return false;
    }
  }


}
