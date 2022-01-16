import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './schemas/roles.schema'


@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Roles', schema: RoleSchema }]),
    AuthModule
  ],
  controllers: [RolesController],
  providers: [RolesService ,JwtStrategy]
})
export class RolesModule {}
