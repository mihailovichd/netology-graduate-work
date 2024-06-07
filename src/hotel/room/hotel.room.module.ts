import { Module } from '@nestjs/common';
import { HotelRoomService } from './hotel.room.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelRoom, HotelRoomSchema } from '../../schemas/hotel.room.schema';
import { HotelRoomAdminController } from './admin/hotel.room.admin.controller';
import { HotelRoomCommonController } from './common/hotel.room.common.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HotelRoom.name, schema: HotelRoomSchema },
    ]),
  ],
  providers: [HotelRoomService],
  controllers: [HotelRoomAdminController, HotelRoomCommonController],
})
export class HotelRoomModule {}
