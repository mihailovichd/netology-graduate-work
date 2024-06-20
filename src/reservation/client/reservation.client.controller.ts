import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ReservationService } from '../reservation.service';
import { JwtAuthGuard } from '../../auth/jwt/jwt.guard';
import { RolesGuard } from '../../auth/roles/roles.guard';
import { Roles } from '../../auth/roles/roles.decorator';
import { Role } from '../../auth/roles/roles.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Client)
@Controller('client/reservations')
export class ReservationClientController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  addReservation(@Body() body: any) {
    return this.reservationService.addReservation(body);
  }

  @Get()
  getReservation(@Req() req) {
    return this.reservationService.getReservations({ userId: req.user._id });
  }

  @Delete(':id')
  deleteReservation(@Param('id') id: string) {
    return this.reservationService.removeReservation(id);
  }
}
