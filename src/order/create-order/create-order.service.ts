import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class CreateOrderService {
  constructor(private readonly _kafka: ProducerService) {}

  async handle() {
    console.log('------------Create order-------------');

    this._kafka.produce({ 
      topic: 'create-order',
      messages: [{ value: 'Order is created.' }],
    });
  }
}  