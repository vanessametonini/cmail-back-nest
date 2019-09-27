import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/models/user';
import { UserInputDTO } from './dto/user-input';
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
  create(@Body() userInput): Promise<User> {
    return this.userService.create(userInput)
  }
  
}
