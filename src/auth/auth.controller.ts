import {Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async loginUser() {
    return this.authService.loginUser();
  }
  @Post('register')
  public async registerUser() {
    return this.authService.registerUser();
  }
}
