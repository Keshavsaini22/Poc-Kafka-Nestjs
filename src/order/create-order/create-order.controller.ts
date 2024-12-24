import { Controller, Post } from '@nestjs/common';
import { CreateOrderService } from './create-order.service';

@Controller('orders')
export class CreateOrderController {
  constructor(private handler: CreateOrderService) {}
  
  @Post()
  async handle() {
    await this.handler.handle();
  }
}
