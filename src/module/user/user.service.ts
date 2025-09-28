import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterDto } from '../auth/dto/user-register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async getUser(filter: Object = {}) {
    return (await this.userRepository.findOne(filter)) || new UserEntity();
  }

  public async createUser(userDto: UserRegisterDto): Promise<UserEntity> {
    const { username, email, password } = userDto;

    return (
      (await this.userRepository.save({ username, email, password })) ||
      new UserEntity()
    );
  }
}
