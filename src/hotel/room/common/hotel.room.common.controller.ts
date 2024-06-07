import { Controller, Get, Param } from '@nestjs/common';
import { HotelRoom } from '../../../schemas/hotel.room.schema';
import { HotelRoomService } from '../hotel.room.service';
import { SearchRoomsParams } from '../../../interfaces/hotel.room.interface';

@Controller('common/hotel-rooms')
export class HotelRoomCommonController {
  constructor(private readonly hotelRoomService: HotelRoomService) {}

  @Get()
  getRooms(@Param() params: SearchRoomsParams): Promise<HotelRoom[]> {
    params.isEnabled = true;
    return this.hotelRoomService.search(params);
  }

  @Get(':id')
  getRoom(@Param('id') id: string): Promise<HotelRoom> {
    return this.hotelRoomService.findById(id);
  }
}
