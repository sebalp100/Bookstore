import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADD = './redux/ADD';
const DELETE = './redux/DELETE';
const FETCH_BOOKS_FULFILLED = './redux/FETCH_BOOKS_FULFILLED';

/* const innitialState = [{
  id: 1,
  name: 'Title',
  author: 'Author',
}, {
  id: 2,
  name: 'Title 2',
  author: 'Author 2',
}, {
  id: 3,
  name: 'Title 3',
  author: 'Author 4',
}]; */

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fIpiL8FANBes9AhLhqrT/books';

/* export default function bookReducer(state = innitialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.payload,
      ];
    case DELETE:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
    case FETCH_BOOKS_FULFILLED:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          id: key,
          title,
          author,
          category,
        };
      });
  }
} */

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
