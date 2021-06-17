import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/publish')
  new(): string {
    return this.appService.new();
  }

  @Get('/all')
  all(): string {
    return this.appService.all();
  }

  @Get('/note/:id')
  one(): string {
    return this.appService.one();
  }

  @Put('/favourite/:id')
  favourite(): string {
    return this.appService.favourite();
  }

  @Get('/favourites')
  favourites(): string {
    return this.appService.favourites();
  }
}
