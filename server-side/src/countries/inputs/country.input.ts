import { Field, InputType } from '@nestjs/graphql';
import {MinLength} from 'class-validator'

@InputType()
export class CountryInput {
  @Field()
  @MinLength(2)
  readonly name: string;
}

@InputType()
export class UpdateCountryInput {
  @Field()
  readonly _id: string;

  @Field({nullable:true})
  readonly name: string;
}

@InputType()
export class FindCountryInput {
  @Field()
  readonly _id: string;
}

@InputType()
export class RemoveCountryInput {
  @Field()
  readonly _id: string;
}
