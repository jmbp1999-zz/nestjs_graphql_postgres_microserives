import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  name: string;
  @Field()
  @Column()
  gender: string;
  @Field()
  @Column()
  address: string;
  @Field()
  @Column()
  mobileNumber: number;
  @Field()
  @Column()
  dateOfBirth: string;
  @Field()
  @Column()
  age: number;
}
