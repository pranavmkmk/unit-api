import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../core/auth/strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { productsSchema } from './schemas/products.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Products', schema: productsSchema }]),
    AuthModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService,JwtStrategy]
})
export class ProductsModule {}
