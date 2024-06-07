import { Test, TestingModule } from '@nestjs/testing';
import { HotelRoomAdminController } from './hotel.room.admin.controller';

describe('RoomController', () => {
  let controller: HotelRoomAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelRoomAdminController],
    }).compile();

    controller = module.get<HotelRoomAdminController>(HotelRoomAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
