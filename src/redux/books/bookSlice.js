import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fIpiL8FANBes9AhLhqrT/books';

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
