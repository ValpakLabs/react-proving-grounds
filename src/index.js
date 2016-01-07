import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import Router from './Router';
import App from './App';
import AllListingsPage from './AllListingsPage';

let routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/coupons',
    component: AllListingsPage
  }
];

let component = (
  <Router routes={routes}/>
);

render(component, document.getElementById('root'));
