import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { CreateOrderModule } from './order/create-order/create-order.module';
import { UpdateOrderModule } from './order/update-order/update-order.module';

@Module({
  imports: [KafkaModule, CreateOrderModule, UpdateOrderModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
