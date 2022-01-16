import { Module } from '@nestjs/common';
import { UsersEntitiesService } from './users-entities.service';
import { UsersEntitiesController } from './users-entities.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersEntitySchema } from './schemas/users-entity.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'UsersEntity', schema: UsersEntitySchema }]),
    AuthModule
  ],
  controllers: [UsersEntitiesController],
  providers: [UsersEntitiesService,JwtStrategy]
})
export class UsersEntitiesModule {}
