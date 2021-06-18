import { Controller, Post, Get, Body, Param, Patch } from "@nestjs/common";
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller("notes")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post("add/:note")
  @ApiTags("notes")
  addNote(@Param('note') note: string) {
    this.appService.insertNote(note);
  }

  @Get("all")
  @ApiTags("notes")
  all() {
    return this.appService.fetchAllNotes();
  }

  @Get(":id")
  @ApiTags("notes")
  one(@Param('id') id: number) {
    return this.appService.fetchSingleNote(id);
  }

  @Patch("markFavourite/:id")
  @ApiTags("notes")
  markFavourite(@Param("id") id: number) {
    this.appService.markFavourite(id);
  } 

  @Get("favourites")
  @ApiTags("notes")
  favourites() {
    return this.appService.fetchFavourites();
  }
}
