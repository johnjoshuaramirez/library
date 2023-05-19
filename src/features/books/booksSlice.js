import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '../../config/firebase';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async userId => {
  try {
    const booksCol = collection(db, 'books');
    const booksSnapshot = await getDocs(
      query(booksCol, orderBy('timestamp', 'desc'))
    );
    const books = booksSnapshot.docs
      .map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      .filter(book => book.userId === userId);
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
});

export const addBook = createAsyncThunk('books/addBook', async book => {
  try {
    const booksCol = collection(db, 'books');
    await addDoc(booksCol, { ...book, timestamp: serverTimestamp() });
  } catch (error) {
    console.error('Error deleting book:', error);
  }
});

export const updateStatus = createAsyncThunk('books/updateStatus', async id => {
  try {
    const bookRef = doc(db, 'books', id);
    const bookSnapshot = await getDoc(bookRef);
    await updateDoc(bookRef, {
      isRead: !bookSnapshot.data().isRead
    });
  } catch (error) {
    console.error('Error updating status:', error);
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async id => {
  try {
    const booksCol = collection(db, 'books');
    await deleteDoc(doc(booksCol, id));
  } catch (error) {
    console.error('Error deleting book:', error);
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetBooks: state => {
      state.data = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { resetBooks } = booksSlice.actions;
export default booksSlice.reducer;
