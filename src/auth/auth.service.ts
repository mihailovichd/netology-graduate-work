import { Injectable } from '@nestjs/common';
import { hashString, UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.passwordHash == hashString(pass)) {
      const { _id, name, email, contactPhone, role } = user;
      return {
        access_token: this.jwtService.sign({
          id: _id,
          name,
          email,
          contactPhone,
          role,
        }),
      };
    }
    return null;
  }

  async validateUserJwt(token: string): Promise<any> {
    const user = await this.userService.findById(token);
    if (user) {
      return user;
    }
    return null;
  }
}
