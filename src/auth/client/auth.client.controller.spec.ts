import { Test, TestingModule } from '@nestjs/testing';
import { AuthClientController } from './auth.client.controller';

describe('ClientController', () => {
  let controller: AuthClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthClientController],
    }).compile();

    controller = module.get<AuthClientController>(AuthClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
