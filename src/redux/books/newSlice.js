/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fIpiL8FANBes9AhLhqrT/books';

const initialState = {
  loading: false,
  books: [],
  error: '',
  refresh: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const book = Object.keys(data).map((key) => ({ id: key, ...data[key][0] }));
  return book;
});

export const saveNewBook = createAsyncThunk('books/createAPI', async (payload) => {
  const response = await axios.post(url, payload);
  return response.data;
});

export const removeNewBook = createAsyncThunk('books/deleteBook', async (payload) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fIpiL8FANBes9AhLhqrT/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload,
    }),
  });
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    [fetchBooks.rejected]: (state) => {
      state.loading = false;
    },
    [saveNewBook.pending]: (state) => {
      state.loading = true;
    },
    [saveNewBook.fulfilled]: (state, action) => ({
      ...state,
      books: [...state.books, action.meta.arg],
      loading: false,
      refresh: !state.refresh,
    }),
    [fetchBooks.rejected]: (state) => {
      state.loading = false;
    },
    [removeNewBook.pending]: (state) => {
      state.loading = true;
    },
    [removeNewBook.fulfilled]: (state, action) => ({
      books: [...state.books, action.meta.arg],
      loading: false,
      refresh: !state.refresh,
    }),
    [saveNewBook.rejected]: (state) => {
      state.loading = false;
    },
  },
});

/* extraReducers: (builder) => {
  builder.addCase(fetchBooks.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    state.loading = false;
    state.books = action.payload;
    state.error = '';
  });
  builder.addCase(fetchBooks.rejected, (state, action) => {
    state.loading = false;
    state.books = [];
    state.error = action.error.message;
  });
  builder.addCase(saveNewBook.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(saveNewBook.fulfilled, (state, action) => {
    state.loading = false;
    state.books.push(action.payload);
  });
  builder.addCase(removeNewBook.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(removeNewBook.fulfilled, (state, action) => {
    state.loading = false;
    state.books = action.payload;
  });
}, */

export default booksSlice.reducer;
