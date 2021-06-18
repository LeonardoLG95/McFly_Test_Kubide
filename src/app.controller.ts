import { Controller, Post, Get, Body, Param, Patch } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post("add")
  @ApiTags("notes")
  addNote(
      @Body("note") note: string
  ) {
      this.appService.insertNote(note);
  }

  @Get("all")
  @ApiTags("note")
  all(): any {
    console.log('Hola caracola');
    return this.appService.fetchAllNotes();
  }

  @Get(":id")
  @ApiTags("notes")
  one(
      @Param("id") id: number
  ): any {
    return this.appService.fetchSingleNote(id);
  }

  @Patch("markFavourite/:id")
  @ApiTags("notes")
  markFavourite(
      @Param("id") id: number
  ) {
    this.appService.markFavourite(id);
  }

  @Get("favourites")
  @ApiTags("notes")
  favourites(): any{
    return this.appService.fetchFavourites();
  }
}
