import { Field, InputType, ObjectType } from 'type-graphql';
import { Json } from '../utils/json';
import { HttpAgentOptions } from './http-agent-options';

@InputType('FetchRequestInput')
@ObjectType()
export class FetchRequest {
  @Field({ nullable: true })
  public headers?: Json;

  @Field(() => String, { nullable: true })
  public method?: string;

  @Field(() => String, { nullable: true })
  public redirect?: 'error' | 'follow' | 'manual';

  @Field(() => HttpAgentOptions, { nullable: true })
  public agent?: HttpAgentOptions; // =null http.Agent instance, allows custom proxy, certificate etc.

  @Field(() => Boolean, { nullable: true })
  public compress?: boolean; // =true support gzip/deflate content encoding. false to disable

  @Field(() => Number, { nullable: true })
  public follow?: number; // =20 maximum redirect count. 0 to not follow redirect

  @Field(() => Number, { nullable: true })
  public size?: number; // =0 maximum response body size in bytes. 0 to disable

  @Field(() => Number, { nullable: true })
  public timeout?: number; // =0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
}
