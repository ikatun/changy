/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
// tslint:disable max-line-length
import { asPromise } from '../../../utils/as-promise';
import { SourceNestedInput } from '../../inputs/SourceNestedInput';
import { IRequestContext } from '../../IRequestContext';
import { PrimaryListener } from '../PrimaryListener';
import { Source } from '../Source';

export async function updateSourceRelation(primaryListener: PrimaryListener, source: SourceNestedInput | null | undefined, context: IRequestContext) {
  const existingSource = await primaryListener.source;

  if (source === null) {
    throw new Error('PrimaryListener.source cannot be null');
  } else if (source === undefined) {
    // do nothing
  } else if (source.id) {
    const sourceModel = await context.em.findOneOrFail(Source, source.id);
    primaryListener.source = asPromise(await sourceModel.update(source, context));
  } else if (existingSource) {
    await existingSource.update(source, context);
  } else {
    primaryListener.source = asPromise(await new Source().update(source, context));
  }
}