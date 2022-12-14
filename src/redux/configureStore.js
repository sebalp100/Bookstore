import bookReducer from './books/books';
import statusReducer from './categories/categories';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    bookReducer,
    statusReducer,
  },
});

export default store;
