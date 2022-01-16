import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProfileEntityService } from './service-profile-entity.service';

describe('ServiceProfileEntityService', () => {
  let service: ServiceProfileEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceProfileEntityService],
    }).compile();

    service = module.get<ServiceProfileEntityService>(ServiceProfileEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
