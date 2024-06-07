import { Test, TestingModule } from '@nestjs/testing';
import { ReservationManagerController } from './reservation.manager.controller';

describe('ApiReservationManagerController', () => {
  let controller: ReservationManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationManagerController],
    }).compile();

    controller = module.get<ReservationManagerController>(
      ReservationManagerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
