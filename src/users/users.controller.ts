import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body('name') name: string, @Body('email') email: string, @Body('password') password: string) {
    const generatedId = await this.usersService.create(name, email, password);
    return { id: generatedId };
  }

  @Get()
  async findAll(): Promise<any> {
    return this.usersService.findAll();
  }
}
