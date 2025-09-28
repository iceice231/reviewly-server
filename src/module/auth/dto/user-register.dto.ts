import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

/** DTO для регистрации пользователя. */
export class UserRegisterDto {
  /** Электронная почта. */
  @IsEmail({}, { message: 'Некорректная электронная почта' })
  public email: string = '';

  /** Имя пользователя. */
  @IsNotEmpty({ message: 'Логин не может быть пустым' })
  @MaxLength(50, { message: 'Логин не будет быть больше 50 символов' })
  public username: string = '';

  /** Пароль. */
  @IsNotEmpty({ message: 'Пароль не может быть пустым' })
  @MinLength(8, { message: 'Длина пароля не может быть меньше 8 символов' })
  public password: string = '';
}
