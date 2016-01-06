import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import AllListingsPage from './AllListingsPage';
import ListingPage from './ListingPage';
import EditorPage from './EditorPage';

let component = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={AllListingsPage}></Route>
      <Route path='/editor' component={EditorPage}></Route>
      <Route path='/:cid' component={ListingPage}></Route>
    </Route>
  </Router>
);

render(component, document.getElementById('root'));
