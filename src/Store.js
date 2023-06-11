// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import divReducer from './reducers/divReducer';

const store = createStore(divReducer, applyMiddleware(thunk));

export default store;
