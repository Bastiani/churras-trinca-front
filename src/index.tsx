import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import BarbecueForm from "./pages/BarbecueForm";
import ParticipantForm from "./pages/ParticipantForm";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route exact path="/barbecue/:id" component={BarbecueForm} />
        <Route exact path="/barbecue" component={BarbecueForm} />
        <Route exact path="/participant" component={ParticipantForm} />
      </App>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
