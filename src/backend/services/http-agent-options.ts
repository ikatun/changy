import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
@ObjectType('HttpOptionsInput')
export class HttpAgentOptions {
  @Field(() => Boolean, { nullable: true })
  public rejectUnauthorized?: boolean;

  @Field(() => Number, { nullable: true })
  public timeout?: number;
}
