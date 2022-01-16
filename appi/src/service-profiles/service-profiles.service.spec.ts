import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProfilesService } from './service-profiles.service';

describe('ServiceProfilesService', () => {
  let service: ServiceProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceProfilesService],
    }).compile();

    service = module.get<ServiceProfilesService>(ServiceProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
