import { loginWithUsernamePaswrdDto , PayloadDto } from '../dto/create-auth.dto';
import { IAuth } from './auth.entity';
export interface IAuthService {
    findUserById(userId: string): Promise<IAuth | null>;
    signPayload(payload: PayloadDto, token_type:string): string | null;
}