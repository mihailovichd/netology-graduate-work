import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from '../schemas/reservation.schema';
import { ReservationManagerController } from './manager/reservation.manager.controller';
import { ReservationClientController } from './client/reservation.client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [ReservationManagerController, ReservationClientController],
  providers: [ReservationService],
})
export class ReservationModule {}
