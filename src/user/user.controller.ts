import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

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
  create(@Body() userInput): Promise<User> {
    return this.userService.create(userInput)
  }
  
}
