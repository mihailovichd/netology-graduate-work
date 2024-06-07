import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { ReservationService } from '../reservation.service';
import { RolesGuard } from '../../auth/roles/roles.guard';
import { Role } from '../../auth/roles/roles.enum';
import { Roles } from '../../auth/roles/roles.decorator';
import { JwtAuthGuard } from '../../auth/jwt/jwt.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.Manager)
@Controller('manager/reservations')
export class ReservationManagerController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get(':userId')
  getReservation(@Param('userId') userId: string) {
    return this.reservationService.getReservations({ userId });
  }

  @Delete(':id')
  deleteReservation(@Param('id') id: string) {
    return this.reservationService.removeReservation(id);
  }
}
