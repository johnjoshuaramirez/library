import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHidden: true,
  title: '',
  author: '',
  pages: '',
  isRead: false
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    toggleHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setIsRead: (state, action) => {
      state.isRead = action.payload;
    },
    clearForm: (state) => {
      state.title = '';
      state.author = '';
      state.pages = '';
      state.isRead = false;
    }
  }
});

export const { toggleHidden, setTitle, setAuthor, setPages, setIsRead, clearForm } =
  formSlice.actions;
export default formSlice.reducer;
