import { Module } from '@nestjs/common';
import { ServiceProfilesService } from './service-profiles.service';
import { ServiceProfilesController } from './service-profiles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProfileSchema } from './schemas/service-profile.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'ServiceProfile', schema: ServiceProfileSchema }]),
    AuthModule
  ],
  controllers: [ServiceProfilesController],
  providers: [ServiceProfilesService,JwtStrategy]
})
export class ServiceProfilesModule {}
