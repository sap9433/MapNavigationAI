/* eslint react/self-closing-comp:0 */

import React from 'react';
import { Route } from 'react-router';

import { IndexPage } from './pages';

export default (
  <div>
    <Route path="/" component={IndexPage}/>
  </div>
);
