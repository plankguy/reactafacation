import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

//import routes from './routes';
import './static/scss/app.scss';

import Wrapper from './src/components/Wrapper';

ReactDOM.render(
  <Wrapper />,
  document.getElementById('content')
);