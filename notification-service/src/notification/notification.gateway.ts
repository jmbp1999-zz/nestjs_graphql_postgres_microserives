import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Notification } from './notification.model';
import { Server } from 'socket.io';
@WebSocketGateway(3003)
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  public sendNotification(notification: Notification) {
    console.log(notification);
    this.server.emit('newNotification', notification);
  }
}
