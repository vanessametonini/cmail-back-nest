import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/models/user';
import { UserInputDTO } from './dto/user-input';

@Controller('user')
export class UserController {

  @Get()
  findAll(): User[] {
    const user: User = {
      id: '123',
      email: 'van@cmail.com',
      name: 'Vanessa',
      phone: '1234567890',
      password: '123',
      username: 'van',
      avatar_url: 'https://avatars1.githubusercontent.com/u/3089882?s=460&v=4'
    }
    return [user]
  }

  @Post()
  create(@Body() userInput: UserInputDTO): User {
    const userCreated: User = {
      username: userInput.username,
      password: userInput.password,
      phone: userInput.phone,
      avatar_url: userInput.avatar_url,
      name: userInput.name,
      email: `${userInput.username}@cmail.com`,
      id: '8319827638'
    }
    return userCreated;
  }
}
