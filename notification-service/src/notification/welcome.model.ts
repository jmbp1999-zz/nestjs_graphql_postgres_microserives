import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Welcome {
  @Field()
  message: string;
}
