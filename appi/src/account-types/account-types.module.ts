import { Module } from '@nestjs/common';
import { AccountTypesService } from './account-types.service';
import { AccountTypesController } from './account-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountTypesSchema } from './schemas/account-types.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'AccountType', schema: AccountTypesSchema }]),
    AuthModule
  ],
  controllers: [AccountTypesController],
  providers: [AccountTypesService,JwtStrategy]
})
export class AccountTypesModule {}
