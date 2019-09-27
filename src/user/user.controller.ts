import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/user/models/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService
               .findAll()
               .then(userList => { return userList})
  }

  @Post()
  create(@Body() userInput): User {
    return this.userService.create(userInput)
  }
  
}
