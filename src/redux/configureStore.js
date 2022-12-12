import { combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore({
  rootReducer,
});

export default store;
