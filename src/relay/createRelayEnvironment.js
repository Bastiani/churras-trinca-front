import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';
import { installRelayDevTools } from 'relay-devtools';

import { getToken } from '../security/authentication';

async function fetchQuery(
  operation,
  variables
  // cacheConfig,
  // uploadables
) {
  const token = await getToken();

  return fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: token || '',
      'Content-Type': 'application/json'
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => response.json());
}

const network = Network.create(
  RelayNetworkLogger.wrapFetch(fetchQuery, () => '')
);

const store = new Store(new RecordSource());
installRelayDevTools();
const env = new Environment({
  network,
  store
});

export default env;
