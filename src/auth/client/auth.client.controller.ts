import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { User } from '../../schemas/user.schema';
import { CreateUserDto } from '../../interfaces/dto/user.dto';

@Controller('client')
export class AuthClientController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body);
  }
}
