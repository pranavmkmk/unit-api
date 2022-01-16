import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryTypesService } from './beneficiary-types.service';

describe('BeneficiaryTypesService', () => {
  let service: BeneficiaryTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiaryTypesService],
    }).compile();

    service = module.get<BeneficiaryTypesService>(BeneficiaryTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
