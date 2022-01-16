import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/users.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
    AuthModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
