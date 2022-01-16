import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntitySchema } from './schemas/entity.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Entity', schema: EntitySchema }]),
    AuthModule
  ],
  controllers: [EntityController],
  providers: [EntityService,JwtStrategy]
})
export class EntityModule {}
