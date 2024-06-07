import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from '../schemas/hotel.schema';
import { HotelRoomModule } from './room/hotel.room.module';
import { HotelAdminController } from './admin/hotel.admin.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
    HotelRoomModule,
  ],
  providers: [HotelService],
  controllers: [HotelAdminController],
})
export class HotelModule {}
