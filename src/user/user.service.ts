import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserInputDTO } from './dto/user-input';
import { User } from './models/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  create(userInput: UserInputDTO): User {
    const userEntity = { ...userInput, ...{ email: `${userInput.username}@cmail.br`}};
    return this.userRepository.create(userEntity);
  }

}