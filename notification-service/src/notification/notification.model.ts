import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Notification {
  @Field()
  message: string;

  @Field()
  status: boolean;

  @Field()
  crudType: string;
}
