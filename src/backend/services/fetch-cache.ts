import { createHash } from 'crypto';
import * as http from 'http';
import * as https from 'https';
import fetch from 'node-fetch';
import * as pipeStreams from 'pipe-streams-to-promise';
import { FetchRequest } from './fetch-request';

export async function fetchCache(url: string, fetchRequest?: FetchRequest) {
  const hash = createHash('sha1');
  hash.setEncoding('hex');

  let options;
  if (fetchRequest) {
    options = JSON.parse(JSON.stringify(fetchRequest));
    if (options.agent && url.startsWith('https')) {
      options.agent = new https.Agent(options.agent);
    } else {
      options.agent = new http.Agent(options.agent);
    }
  }

  const response = await fetch(url, options);

  console.log(url, new Date());

  await pipeStreams([response.body, hash]);

  return hash.read() as string;
}
