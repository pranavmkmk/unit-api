import { Module } from '@nestjs/common';
import { AccountProvidersService } from './account-providers.service';
import { AccountProvidersController } from './account-providers.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountProvidersSchema } from './schemas/account-providers.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'AccountProviders', schema: AccountProvidersSchema }]),
    AuthModule
  ],
  controllers: [AccountProvidersController],
  providers: [AccountProvidersService,JwtStrategy]
})
export class AccountProvidersModule {}
