import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Welcome } from './welcome.model';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';

@Resolver()
export class NotificationResolver {
  constructor(private notificationService: NotificationService) {}
  @Query(() => Welcome, { name: 'welcome' })
  get() {
    return { message: 'Welcome' };
  }

  @Mutation(() => Welcome, { name: 'sendNotification' })
  post(@Args('notification') notification: Notification) {
    this.notificationService.sendNotification(notification);
    return { message: 'welcome' };
  }
}
