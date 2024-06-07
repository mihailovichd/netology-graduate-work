import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDocument } from '../schemas/user.schema';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  logIn(@Request() req): Promise<UserDocument> {
    return req.user;
  }
}
