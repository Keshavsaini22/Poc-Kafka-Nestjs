import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/kafka/kafka.module';
import { UpdateOrderController } from './update-order.controller';
import { UpdateOrderService } from './update-order.service';

@Module({
  imports: [KafkaModule],
  controllers: [UpdateOrderController],
  providers: [UpdateOrderService],
})

export class UpdateOrderModule {}
