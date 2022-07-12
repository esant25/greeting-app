import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CountryDto {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field({nullable: true})
  updatedAt: Date;
}
