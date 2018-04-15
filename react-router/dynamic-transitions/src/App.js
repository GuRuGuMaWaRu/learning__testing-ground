import React from "react";
import styled from "styled-components";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Transitions from "./transitions";
import { Green, Yellow } from "./Page";

const Perspective = styled.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
`;

const history = createHistory();
export default () => (
  <Router history={history}>
    <Route
      render={({ location }) => (
        <Perspective>
          <Transitions pageKey={location.key} {...location.state}>
            <Switch location={location}>
              <Route path="/green" component={Green} />
              <Route path="/yellow" component={Yellow} />
              <Redirect from="/" to="/green" />
            </Switch>
          </Transitions>
        </Perspective>
      )}
    />
  </Router>
);
