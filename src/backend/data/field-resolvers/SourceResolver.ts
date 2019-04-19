import { FieldResolver, Resolver, Root } from 'type-graphql';

import { FetchRequest } from '../../services/fetch-request';
import { Source } from '../models/Source';

@Resolver(Source)
export class SourceResolver {
  @FieldResolver()
  public hash(@Root() source: Source): string {
    return source.hash;
  }

  @FieldResolver(() => FetchRequest, { nullable: true })
  public config(@Root() source: Source): FetchRequest | undefined {
    return source.requestConfig && JSON.parse(source.requestConfig);
  }

  @FieldResolver()
  public lastRefreshTime(@Root() source: Source): Date {
    return source.lastRefreshTime;
  }
}
