import { Module } from '@nestjs/common';
import { BeneficiariesService } from './beneficiaries.service';
import { BeneficiariesController } from './beneficiaries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BeneficiarySchema } from './schemas/beneficiaries.schema'
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Beneficiary', schema: BeneficiarySchema }]),
    AuthModule
  ],
  controllers: [BeneficiariesController],
  providers: [BeneficiariesService,JwtStrategy]
})
export class BeneficiariesModule {}
