/*    eslint indent: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import DevTools from './DevTools';
import { createHashHistory as createHistory } from 'history';
import routes from '../routes';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// TODO: rethink about logger
const finalCreateStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
        routes,
        createHistory
    }),
    DevTools.instrument(),
    applyMiddleware()
)(createStore);

const store = finalCreateStore(rootReducer);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
