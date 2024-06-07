import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateRoomDto } from '../../../interfaces/dto/hotel.room.dto';
import { HotelRoomService } from '../hotel.room.service';
import { Roles } from '../../../auth/roles/roles.decorator';
import { Role } from '../../../auth/roles/roles.enum';
import { JwtAuthGuard } from '../../../auth/jwt/jwt.guard';
import { RolesGuard } from '../../../auth/roles/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Admin)
@Controller('admin/hotel-rooms')
export class HotelRoomAdminController {
  constructor(private readonly hotelRoomService: HotelRoomService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images' }]))
  addRoom(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body: CreateRoomDto,
  ) {
    body.images = files;
    return this.hotelRoomService.create(body);
  }
}
