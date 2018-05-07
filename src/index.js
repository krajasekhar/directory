
import { render } from 'react-dom';
import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Signup from './containers/signup.js';
import Home from './containers/home.js';
import allreducers from './reducers';

const store = createStore(
  allreducers
);

console.log("hii");
render(
    <Provider store={store}>
        <Home />
    </Provider>
, document.getElementById('app'));
