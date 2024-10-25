import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  // constructor() {}

  @Get()
  findAll(@Query('brand') brand: string) {
    return 'coffees ' + brand;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'coffee ' + id;
  }

  @Post(':id')
  @HttpCode(HttpStatus.CREATED)
  create(@Body('name') body: string, @Param('id') id: string) {
    return 'create coffee #' + id + ' ' + body;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return 'update coffee #' + id;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.GONE)
  remove(@Param('id') id: string) {
    return 'remove coffee #' + id;
  }
}
