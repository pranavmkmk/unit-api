import { Test, TestingModule } from '@nestjs/testing';
import { AccountProvidersController } from './account-providers.controller';
import { AccountProvidersService } from './account-providers.service';

describe('AccountProvidersController', () => {
  let controller: AccountProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountProvidersController],
      providers: [AccountProvidersService],
    }).compile();

    controller = module.get<AccountProvidersController>(AccountProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
