import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProfileEntityController } from './service-profile-entity.controller';
import { ServiceProfileEntityService } from './service-profile-entity.service';

describe('ServiceProfileEntityController', () => {
  let controller: ServiceProfileEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceProfileEntityController],
      providers: [ServiceProfileEntityService],
    }).compile();

    controller = module.get<ServiceProfileEntityController>(ServiceProfileEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
