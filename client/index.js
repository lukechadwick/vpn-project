import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
