import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsSchema } from './schemas/accounts.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Accounts', schema: AccountsSchema }]),
    AuthModule
  ],
  controllers: [AccountsController],
  providers: [AccountsService,JwtStrategy]
})
export class AccountsModule {}
