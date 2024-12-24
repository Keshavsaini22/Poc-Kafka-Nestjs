import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CreateOrderController } from './create-order.controller';
import { CreateOrderService } from './create-order.service';

@Module({
  imports: [KafkaModule],
  controllers: [CreateOrderController],
  providers: [CreateOrderService],
})

export class CreateOrderModule {}
