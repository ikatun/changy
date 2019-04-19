/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';

import { SortOrderEnum } from '../SortOrderEnum';

// <keep-imports>
// </keep-imports>

@InputType()
export class SourceSearchOrderInput {
  @Field(() => SortOrderEnum, { nullable: true })
  public id?: SortOrderEnum;

  @Field(() => SortOrderEnum, { nullable: true })
  public intervalSeconds?: SortOrderEnum | null;

  @Field(() => SortOrderEnum, { nullable: true })
  public url?: SortOrderEnum | null;

  @Field(() => SortOrderEnum, { nullable: true })
  public owner?: SortOrderEnum | null;

  @Field(() => SortOrderEnum, { nullable: true })
  public primaryListener?: SortOrderEnum | null;

  // <keep-methods>
  // </keep-methods>
}