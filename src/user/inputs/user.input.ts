import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly country: string;

  @Field()
  readonly birthday: Date;
}

@InputType()
export class UpdateUserInput {
  @Field()
  readonly _id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly country: string;

  @Field()
  readonly birthday: Date;
}

@InputType()
export class FindUserInput {
  @Field()
  readonly _id: string;
}
