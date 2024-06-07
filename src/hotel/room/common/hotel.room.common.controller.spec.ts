import { Test, TestingModule } from '@nestjs/testing';
import { HotelRoomCommonController } from './hotel.room.common.controller';

describe('ApiController', () => {
  let controller: HotelRoomCommonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelRoomCommonController],
    }).compile();

    controller = module.get<HotelRoomCommonController>(
      HotelRoomCommonController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
