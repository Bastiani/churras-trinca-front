import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'relay-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';
import initEnvironment from './lib/createRelayEnvironment';

import Home from './pages/Home';
import Signin from './pages/Signin';

ReactDOM.render(
  <RelayEnvironmentProvider environment={initEnvironment()}>
    <BrowserRouter>
      <Switch>
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
        </App>
      </Switch>
    </BrowserRouter>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
