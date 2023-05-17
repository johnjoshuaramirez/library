import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    books: [],
    hidden: false
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setHidden: (state, action) => {
      state.hidden = action.payload;
    }
  }
});

export const { setBooks, setHidden } = inputSlice.actions;
export default inputSlice.reducer;
