import { map, delay } from 'bluebird';
import { getManager } from 'typeorm';

import { Source } from '../data/models/Source';
import { fetchCache } from './fetch-cache';

export async function fetchPendingSources() {
  const manager = getManager();

  const sources = await manager
    .createQueryBuilder(Source, 'source')
    .where(`extract(epoch from now()) - extract(epoch from source."lastRefreshTime") > source."intervalSeconds"`)
    .getMany();

  await map(sources, async (source: Source) => {
    try {
      const hash = await fetchCache(source.url, source.requestConfig && JSON.parse(source.requestConfig));
      const lastRefreshTime = new Date();
      await manager.update(Source, { id: source.id }, { hash, lastRefreshTime });
    } catch (e) {
      console.error('request failed', e);
    }
  }, { concurrency: 100 });
  await delay(1000);
}

export async function refreshForever() {
  while (true) {
    await fetchPendingSources();
  }
}
