import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import thunk from 'redux-thunk';
import testReducer from './reducers/testReducer.js';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';

const store = createStore(testReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

