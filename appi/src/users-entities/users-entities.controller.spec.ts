import { Test, TestingModule } from '@nestjs/testing';
import { UsersEntitiesController } from './users-entities.controller';
import { UsersEntitiesService } from './users-entities.service';

describe('UsersEntitiesController', () => {
  let controller: UsersEntitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersEntitiesController],
      providers: [UsersEntitiesService],
    }).compile();

    controller = module.get<UsersEntitiesController>(UsersEntitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
