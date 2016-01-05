import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';

let component = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/' component={CouponList}></Route>
      <Route path='/:id' component={CouponRedemption}></Route>
    </Route>
  </Router>
);

render(component, document.getElementById('root'));
