import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BullModule } from '@nestjs/bull';
import { FileProducerService } from './file.producer.service';
import { FileConsumer } from './file.consumer';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 5003,
      },
    }),
    BullModule.registerQueue({
      name: 'file-queue',
    }),
  ],
  controllers: [AppController],
  providers: [FileProducerService, FileConsumer, AppService],
})
export class AppModule {}
