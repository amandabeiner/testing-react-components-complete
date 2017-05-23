import 'babel-polyfill';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import ElephantContainer from './containers/ElephantContainer';

ReactDOM.render(
  <ElephantContainer />,
  document.getElementById('app')
);
