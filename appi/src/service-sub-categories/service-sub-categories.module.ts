import { Module } from '@nestjs/common';
import { ServiceSubCategoriesService } from './service-sub-categories.service';
import { ServiceSubCategoriesController } from './service-sub-categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSubCategorySchema } from './schemas/service-sub-categories.schema';

@Module({
  imports: 
  [
  MongooseModule.forFeature([{ name: 'ServiceSubCategory', schema: ServiceSubCategorySchema }]),
  ],
  controllers: [ServiceSubCategoriesController],
  providers: [ServiceSubCategoriesService]
})
export class ServiceSubCategoriesModule {}
