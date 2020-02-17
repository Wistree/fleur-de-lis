import { createStore, applyMiddleware } from 'redux';

// add middleware to the store => every action get fired/dispatched, we can catch them and display them
// logger make it easier to understand what we did
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// set up middle ware
// the middle ware that the store expect from redux is an array
const middlewares = [logger];

// make the store
// a func that takes rootReducer & return value of applyMiddleware
// what ...middlewares will do is this will spread in all of the methods or all of the values in this array into `applyMiddleware` as individual args
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

/*
with the new store u instanciate with createStore() method
we will bring it to index.js and pass it into provider component
*/ 