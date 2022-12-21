import logger from 'redux-logger';
import statusReducer from './categories/categories';
import booksReducer from './books/newSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    statusReducer,
    booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
