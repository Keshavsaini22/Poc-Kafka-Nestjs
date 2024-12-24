import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class UpdateOrderService {
  constructor(private readonly _kafka: ProducerService) {}

  async handle() {
    console.log('Update order');

    this._kafka.produce({
      topic: 'update-order',
      messages: [{ value: 'Order is updated.' }],
    });
  }
}