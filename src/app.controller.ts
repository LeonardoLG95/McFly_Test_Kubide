import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/publish')
  @ApiTags('notes')
  new(): string {
    return this.appService.new();
  }

  @Get('/all')
  @ApiTags('notes')
  all(): string {
    return this.appService.all();
  }

  @Get('/note/:id')
  @ApiTags('notes')
  one(): string {
    return this.appService.one();
  }

  @Put('/favourite/:id')
  @ApiTags('notes')
  favourite(): string {
    return this.appService.favourite();
  }

  @Get('/favourites')
  @ApiTags('notes')
  favourites(): string {
    return this.appService.favourites();
  }
}
