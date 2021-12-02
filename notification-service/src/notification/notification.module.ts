import { Module } from '@nestjs/common';
import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';
import { NotificationGateway } from './notification.gateway';

@Module({
  providers: [NotificationResolver, NotificationService, NotificationGateway],
})
export class NotificationModule {}
