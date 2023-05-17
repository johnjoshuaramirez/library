import { configureStore } from '@reduxjs/toolkit';
import { inputReducer } from '../features/input/inputSlice';
import { mainReducer } from '../features/main/mainSlice';

export const store = configureStore({
  reducer: { input: inputReducer, main: mainReducer }
});
