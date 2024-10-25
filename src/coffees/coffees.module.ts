import { Module } from '@nestjs/common';
import { CoffeeService } from './coffees.service';
import { CoffeeController } from './coffees.controller';

@Module({
  providers: [CoffeeService],
  controllers: [CoffeeController],
})
export class CoffeeModule {}
