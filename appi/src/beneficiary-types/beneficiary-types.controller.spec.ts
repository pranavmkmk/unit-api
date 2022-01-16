import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryTypesController } from './beneficiary-types.controller';
import { BeneficiaryTypesService } from './beneficiary-types.service';

describe('BeneficiaryTypesController', () => {
  let controller: BeneficiaryTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiaryTypesController],
      providers: [BeneficiaryTypesService],
    }).compile();

    controller = module.get<BeneficiaryTypesController>(BeneficiaryTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
