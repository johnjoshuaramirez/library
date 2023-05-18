import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import booksReducer from '../features/books/booksSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    books: booksReducer,
    user: userReducer
  }
});
