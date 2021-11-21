import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentUpdateDTO {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  gender: string;
  @Field()
  address: string;
  @Field()
  mobileNumber: number;
  @Field()
  dateOfBirth: string;
  @Field()
  age: number;
}
