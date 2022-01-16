import { Test, TestingModule } from '@nestjs/testing';
import { UsersEntitiesService } from './users-entities.service';

describe('UsersEntitiesService', () => {
  let service: UsersEntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersEntitiesService],
    }).compile();

    service = module.get<UsersEntitiesService>(UsersEntitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
