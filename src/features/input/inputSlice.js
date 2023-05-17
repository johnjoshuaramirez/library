import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    title: '',
    author: '',
    pages: '',
    status: false
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAuthor: (state, action) => {
      state.title = action.payload;
    },
    setPages: (state, action) => {
      state.title = action.payload;
    },
    setStatus: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { setTitle, setAuthor, setPages, setStatus } = inputSlice.actions;
export default inputSlice.reducer;
