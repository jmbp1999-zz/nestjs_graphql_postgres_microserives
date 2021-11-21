import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentCreateDTO {
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
