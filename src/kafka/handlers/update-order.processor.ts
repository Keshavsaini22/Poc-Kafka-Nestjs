import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';

@Injectable()
export class UpdateOrderConsumer implements OnModuleInit {
  constructor(private readonly _consumer: ConsumerService) {}

  async onModuleInit() {
    this._consumer.consume(
      'update-client',
      { topics: ['update-order'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'update-consumer',
            message: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
