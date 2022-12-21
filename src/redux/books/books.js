import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD = './redux/ADD';
const DELETE = './redux/DELETE';
const FETCH_BOOKS_FULFILLED = './redux/FETCH_BOOKS_FULFILLED';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fIpiL8FANBes9AhLhqrT/books';

export function createBook(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function deleteBook(book) {
  return {
    type: DELETE,
    payload: book,
  };
}

export function getBooks(book) {
  return {
    type: FETCH_BOOKS_FULFILLED,
    payload: book,
  };
}

export const fetchUsers = createAsyncThunk('fetchBook', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const book = Object.keys(data).map((key) => ({ id: key, ...data[key][0] }));
  return book;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    entities: [],
    loading: false,
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => ({
      ...state, loading: true,
    }),
    [fetchUsers.fulfilled]: (state, action) => ({
      ...state,
      entities: [...state.entities, action.payload],
      loading: false,
    }),
    [fetchUsers.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export default bookSlice.reducer;
