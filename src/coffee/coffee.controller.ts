import { Controller, Get } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  getCoffee() {
    return 'coffee';
  }
}
