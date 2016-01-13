'use strict';

require('babel-core/register')({});

var server = require('./server').default;

const PORT = process.env.PORT || 3333;

server.listen(PORT, function () {
  console.log('Server listening on: ' + PORT);
});

/*import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import routes from './routes';

import './static/scss/app.scss';
//import Wrapper from './src/components/Wrapper';

const history = createBrowserHistory();

//Router.run(routes, Router.HistoryLocation, (Wrapper, state) => {
//<Wrapper />,
  ReactDOM.render(
    <Router children={routes} history={history} />,
    document.getElementById('content')
  );
//});*/
