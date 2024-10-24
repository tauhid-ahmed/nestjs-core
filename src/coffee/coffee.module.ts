import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { Coffee } from './coffee';

@Module({
  controllers: [CoffeeController],
  providers: [Coffee]
})
export class CoffeeModule {}
