import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer } from 'react-relay';
import { Variables } from 'relay-runtime';

import Environment from './createRelayEnvironment';

export default function createQueryRenderer(
  FragmentComponent,
  Component,
  config,
) {
  const { query, queriesParams } = config;

  const QueryRendererWrapper = (props) => {
    const variables = queriesParams ? queriesParams(props) : config.variables;

    return (
      <QueryRenderer
        environment={Environment}
        query={query}
        variables={variables || {}}
        render={({ error, props: renderProps }) => {
          if (error) {
            return <span>{error.toString()}</span>;
          }

          if (renderProps) {
            return <FragmentComponent {...renderProps} query={renderProps} />;
          }

          return <span>loading</span>;
        }}
      />
    );
  };

  return hoistStatics(QueryRendererWrapper, Component);
}
