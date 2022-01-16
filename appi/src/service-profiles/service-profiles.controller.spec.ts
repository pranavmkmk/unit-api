import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProfilesController } from './service-profiles.controller';
import { ServiceProfilesService } from './service-profiles.service';

describe('ServiceProfilesController', () => {
  let controller: ServiceProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceProfilesController],
      providers: [ServiceProfilesService],
    }).compile();

    controller = module.get<ServiceProfilesController>(ServiceProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
