import React from 'react';
import { Router, Route, HomeRoute, Link, browserHistory } from 'react-router'

import Wrapper from './src/components/Wrapper';
import Home from './src/components/Home';
import About from './src/components/About';

/* https://github.com/rackt/react-router/blob/latest/docs/guides/basics/RouteConfiguration.md
  /       : Wrapper -> Home
  /about  : Wrapper -> About
*/
export default (
  /*<Router history={browserHistory}>*/
    <Route name="wrapper" component={Wrapper} path="/">
      <HomeRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  /*</Router>*/
);

/*
export default (
  <Route name="wrapper" component={Wrapper} path="/">
    <HomeRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
*/
