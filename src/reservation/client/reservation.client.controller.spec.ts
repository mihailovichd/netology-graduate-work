import { Test, TestingModule } from '@nestjs/testing';
import { ReservationClientController } from './reservation.client.controller';

describe('ApiReservationClientController', () => {
  let controller: ReservationClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationClientController],
    }).compile();

    controller = module.get<ReservationClientController>(
      ReservationClientController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
