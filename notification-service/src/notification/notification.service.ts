import { Injectable } from '@nestjs/common';
import { Notification } from './notification.model';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  constructor(private notificationGateway: NotificationGateway) {}
  sendNotification(notification: Notification) {
    this.notificationGateway.sendNotification(notification);
  }
}
