import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionsSchema } from './schemas/permissions.schemas'

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Permissions', schema: PermissionsSchema }]),
    AuthModule
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
