import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from './common/LoadingSpinner';
import NewBook from './NewBook';
import BookCard from './BookCard';
import { useEffect } from 'react';
import { fetchBooks } from '../features/books/booksSlice';

function BookContainer() {
  const books = useSelector(state => state.books.data);
  const status = useSelector(state => state.books.status);
  const userId = useSelector(state => state.user.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(userId));
  }, [dispatch, userId]);

  return (
    <main className="book-container">
      <NewBook />
      {status === 'loading' && <LoadingSpinner />}
      {status === 'succeeded' &&
        books.map(book => <BookCard key={book.id} {...book} />)}
      {status === 'failed' && <div>Error occurred while loading books.</div>}
    </main>
  );
}

export default BookContainer;
