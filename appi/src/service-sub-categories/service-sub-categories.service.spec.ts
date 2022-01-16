import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSubCategoriesService } from './service-sub-categories.service';

describe('ServiceSubCategoriesService', () => {
  let service: ServiceSubCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceSubCategoriesService],
    }).compile();

    service = module.get<ServiceSubCategoriesService>(ServiceSubCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
