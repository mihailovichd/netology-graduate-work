import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HotelModule } from './hotel/hotel.module';
import { ReservationModule } from './reservation/reservation.module';
import { SupportModule } from './support/support.module';
import { RouterModule } from '@nestjs/core';
import { HotelRoomModule } from './hotel/room/hotel.room.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      tls: true,
      tlsCAFile: process.env.PATH_CA,
    }),
    UserModule,
    HotelModule,
    ReservationModule,
    SupportModule,
    AuthModule,
    RouterModule.register([
      {
        path: 'api',
        module: AppModule,
        children: [
          {
            path: '/',
            module: HotelModule,
          },
          {
            path: '/',
            module: HotelRoomModule,
          },
          {
            path: '/',
            module: ReservationModule,
          },
          {
            path: '/',
            module: AuthModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
