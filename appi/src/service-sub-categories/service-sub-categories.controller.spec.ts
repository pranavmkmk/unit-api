import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSubCategoriesController } from './service-sub-categories.controller';
import { ServiceSubCategoriesService } from './service-sub-categories.service';

describe('ServiceSubCategoriesController', () => {
  let controller: ServiceSubCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceSubCategoriesController],
      providers: [ServiceSubCategoriesService],
    }).compile();

    controller = module.get<ServiceSubCategoriesController>(ServiceSubCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
