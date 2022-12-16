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
});

export default store;
