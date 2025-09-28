import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  /** Авторизация пользовател. */
  @Post('login')
  @UsePipes(ValidationPipe)
  public async loginUser(@Body() userDto: UserLoginDto) {
    return this.authService.loginUser(userDto);
  }

  /** Регистрация пользователя. */
  @Post('register')
  @UsePipes(ValidationPipe)
  public async registerUser(@Body() userDto: UserRegisterDto) {
    return this.authService.registerUser(userDto);
  }
}
