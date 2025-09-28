import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

/** DTO для авторизации пользователя. */
export class UserLoginDto {
  /** Имя пользователя. */
  @IsNotEmpty({ message: 'Логин не может быть пустым' })
  @MaxLength(50, { message: 'Логин не будет быть больше 50 символов' })
  public username: string = '';

  /** Пароль. */
  @IsNotEmpty({ message: 'Пароль не может быть пустым' })
  @MinLength(8, { message: 'Длина пароля не может быть меньше 8 символов' })
  public password: string = '';
}
