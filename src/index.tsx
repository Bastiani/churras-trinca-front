import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import BarbecueForm from './pages/BarbecueForm';
import ParticipantForm from './pages/ParticipantForm';

// type Routes = {
//   path: string;
//   componente: React.ReactNode;
//   exact: boolean;
//   title: string;
// };

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Home'
  },
  {
    path: '/signin',
    component: Signin,
    exact: false,
    title: 'Signin'
  },
  {
    path: '/signup',
    component: Signup,
    exact: false,
    title: 'Signup'
  },
  {
    path: '/barbecue/:id',
    component: BarbecueForm,
    exact: true,
    title: 'Barbecue'
  },
  {
    path: '/barbecue',
    component: BarbecueForm,
    exact: true,
    title: 'Barbecue'
  },
  {
    path: '/participant',
    component: ParticipantForm,
    exact: true,
    title: 'Participant'
  }
];

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App>
        {routes.map((route: any) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </App>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
