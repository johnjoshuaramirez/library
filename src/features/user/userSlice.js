import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  userId: ''
};

export const formSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    clearUserName: (state) => {
      state.username = '';
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    clearUserId: (state) => {
      state.userId = '';
    }
  }
});

export const { setUserName, clearUserName, setUserId } = formSlice.actions;
export default formSlice.reducer;
