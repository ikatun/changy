/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';

import { SourceNestedInput } from './SourceNestedInput';

// <keep-imports>
// </keep-imports>

@InputType()
export class SecondaryListenerNestedInput {
  @Field(() => EntityIdScalar, { nullable: true })
  public id?: EntityId;

  @Field(() => String, { nullable: true })
  public url?: string | null;

  @Field(() => SourceNestedInput, { nullable: true })
  public source?: SourceNestedInput | null;

  // <keep-methods>
  // </keep-methods>
}
