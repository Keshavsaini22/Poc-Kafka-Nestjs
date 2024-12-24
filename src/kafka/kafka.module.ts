import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer/consumer.service';
import { ProducerService } from './producer/producer.service';
import { CreateOrderConsumer } from './handlers/create-order.processor';
import { UpdateOrderConsumer } from './handlers/update-order.processor';

@Module({
  providers: [ConsumerService, ProducerService,CreateOrderConsumer,UpdateOrderConsumer],
  exports: [ConsumerService, ProducerService],
})

export class KafkaModule {} 