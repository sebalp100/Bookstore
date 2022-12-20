import logger from 'redux-logger';
import bookReducer from './books/books';
import statusReducer from './categories/categories';
import booksReducer from './books/newSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    bookReducer,
    statusReducer,
    booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
