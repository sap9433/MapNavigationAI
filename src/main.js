import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './lib/store';
import styles from 'styles/main.scss';

if (false && __DEVTOOLS__) {
  const DevTools = require('./lib/DevTools');

  render(
    
      <Provider store={store}>
       <div>
        <ReduxRouter />
        <DevTools/>
       </div>
      </Provider>
    ,
    document.getElementById('content')
  );
} else {
  render(
    <Provider store={store}>
     <div>
      <div className={styles.appHeader}> 
       <div>
        Map navigation in pure javaScript using AI and React
       </div>
      </div>
      <ReduxRouter />
     </div>
    </Provider>
    ,
    document.getElementById('content')
  );
}
