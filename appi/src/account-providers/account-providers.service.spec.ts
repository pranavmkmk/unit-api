import { Test, TestingModule } from '@nestjs/testing';
import { AccountProvidersService } from './account-providers.service';

describe('AccountProvidersService', () => {
  let service: AccountProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountProvidersService],
    }).compile();

    service = module.get<AccountProvidersService>(AccountProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
