import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserEntity } from '../../entity/user.entity';
import { comparePasswords, hashPassword } from '../../utils/hash.utils';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /** Авторизация пользователя. */
  public async loginUser(
    userDto: UserLoginDto,
  ): Promise<{ access_token: string }> {
    const user: UserEntity = await this.userService.getUser({
      where: { username: userDto.username },
    });

    if (
      !user?.id ||
      !(await comparePasswords(userDto.password, user.password))
    ) {
      throw new HttpException('Неверный логин или пароль', 400);
    }

    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        username: user.username,
      }),
    };
  }

  /** Регистрация пользователя. */
  public async registerUser(
    userDto: UserRegisterDto,
  ): Promise<{ access_token: string }> {
    await this.checkHasUser(userDto);

    userDto.password = await hashPassword(userDto.password);

    const user: UserEntity = await this.userService.createUser(userDto);

    if (!user?.id) {
      throw new HttpException('Ошибка при регистрации', 500);
    }

    return {
      access_token: await this.jwtService.signAsync({
        sub: user.id,
        username: user.username,
      }),
    };
  }

  private async checkHasUser(userDto: UserRegisterDto): Promise<void> {
    const filter: Object = {
      where: [{ email: userDto.email }, { username: userDto.username }],
    };

    const user: UserEntity | null = await this.userService.getUser(filter);

    if (user?.id) {
      if (user.email === userDto.email) {
        throw new HttpException(
          'Пользователь с такой элеткронной почтой уже существует',
          400,
        );
      }

      throw new HttpException('Пользователь с таким именем уще сущетвует', 400);
    }
  }
}
