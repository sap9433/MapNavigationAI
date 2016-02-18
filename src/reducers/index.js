import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import { todos, filter } from './todos.js';
import { svgArrAcess, optimalPath } from './LayerReducer.js';

const rootReducer = combineReducers({
  svgArrAcess,
  optimalPath,
  todos,
  filter,
  router
});

export default rootReducer;
