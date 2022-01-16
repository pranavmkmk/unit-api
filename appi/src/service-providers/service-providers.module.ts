import { Module } from '@nestjs/common';
import { ServiceProvidersService } from './service-providers.service';
import { ServiceProvidersController } from './service-providers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceProviderSchema } from './schemas/service-providers.shema';

@Module({
  imports: 
  [
  MongooseModule.forFeature([{ name: 'ServiceProvider', schema: ServiceProviderSchema }]),
  ],
  controllers: [ServiceProvidersController],
  providers: [ServiceProvidersService]
})
export class ServiceProvidersModule {}
