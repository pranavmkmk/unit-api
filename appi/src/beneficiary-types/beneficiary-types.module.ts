import { Module } from '@nestjs/common';
import { BeneficiaryTypesService } from './beneficiary-types.service';
import { BeneficiaryTypesController } from './beneficiary-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BeneficiaryTypeSchema } from './schemas/beneficiary-types.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
@Module({
  
  imports:[
    MongooseModule.forFeature([{ name: 'BeneficiaryType', schema: BeneficiaryTypeSchema }]),
    AuthModule
  ],
  controllers: [BeneficiaryTypesController],
  providers: [BeneficiaryTypesService,JwtStrategy]
})
export class BeneficiaryTypesModule {}
