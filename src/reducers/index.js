import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { svgArrAcess, optimalPath } from './LayerReducer.js';

const rootReducer = combineReducers({
  svgArrAcess,
  optimalPath,
  router
});

export default rootReducer;
