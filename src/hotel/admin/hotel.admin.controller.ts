import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateHotelDto } from '../../interfaces/dto/hotel.dto';
import { HotelService } from '../hotel.service';
import { SearchHotelParams } from '../../interfaces/hotel.interface';
import { Role } from '../../auth/roles/roles.enum';
import { Roles } from '../../auth/roles/roles.decorator';
import { JwtAuthGuard } from '../../auth/jwt/jwt.guard';
import { RolesGuard } from '../../auth/roles/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Admin)
@Controller('admin/hotels')
export class HotelAdminController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  addHotel(@Body() body: CreateHotelDto) {
    return this.hotelService.create(body);
  }

  @Get()
  getHotels(@Param() params: SearchHotelParams) {
    return this.hotelService.search(params);
  }

  @Get('/:id')
  getHotel(@Param('id') id: string) {
    return this.hotelService.findById(id);
  }
}
