import { Controller, Put } from '@nestjs/common';
import { UpdateOrderService } from './update-order.service';

@Controller('orders')
export class UpdateOrderController {
  constructor(private handler: UpdateOrderService) {}
  
  @Put()
  async handle() {
    await this.handler.handle();
  }
}
