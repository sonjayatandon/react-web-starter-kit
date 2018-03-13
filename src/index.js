/* eslint-disable no-console */
import 'babel-polyfill';

// react components
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// styling components
require('./favicon.ico'); // Tell webpack to load favicon.ico

// actions and store
// import * as actionTypes from "./constants/actionTypes"
import configureStore, { history } from './store/configureStore';

// app components
import Root from './components/Root';

// app actions
import * as systemActions from './actions/systemActions';

const store = configureStore();

// checked the auth state in local storage
// if app authorized, authorize the session
const storedAuth = localStorage.getItem("auth")
if (storedAuth) {
  const auth = JSON.parse(storedAuth)
  store.dispatch(systemActions.authorizeSession(auth));
}

// render the app
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

