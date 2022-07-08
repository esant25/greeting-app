import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  country: string;

  @Field()
  birthday: Date;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
