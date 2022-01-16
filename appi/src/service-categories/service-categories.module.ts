import { Module } from '@nestjs/common';
import { ServiceCategoriesService } from './service-categories.service';
import { ServiceCategoriesController } from './service-categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceCategorySchema } from './schemas/service-category.schema';

@Module({
  imports: 
  [
  MongooseModule.forFeature([{ name: 'ServiceCategory', schema: ServiceCategorySchema }]),
  ],
  controllers: [ServiceCategoriesController],
  providers: [ServiceCategoriesService]
})
export class ServiceCategoriesModule {}
