import { Module } from '@nestjs/common';
import { ServiceProfileEntityService } from './service-profile-entity.service';
import { ServiceProfileEntityController } from './service-profile-entity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProfileEntitySchema } from './schemas/service-profile-entity.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'ServiceProfileEntity', schema: ServiceProfileEntitySchema }]),
    AuthModule
  ],
  controllers: [ServiceProfileEntityController],
  providers: [ServiceProfileEntityService,JwtStrategy]
})
export class ServiceProfileEntityModule {}
