import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBooks,
  updateStatus,
  deleteBook
} from '../features/books/booksSlice';

function BookCard({ id, title, pages, author, isRead }) {
  const userId = useSelector(state => state.user.userId);
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    dispatch(updateStatus(id)).then(() => {
      dispatch(fetchBooks(userId));
    });
  };

  const handleDeleteBook = () => {
    dispatch(deleteBook(id)).then(() => {
      dispatch(fetchBooks(userId));
    });
  };

  return (
    <div className="book-card">
      <button className="x-mark" onClick={handleDeleteBook}>
        ✖
      </button>
      <div className="book-details">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <span
          className={`book-status ${isRead ? 'read' : 'unread'}`}
          onClick={handleUpdateStatus}
        >
          {isRead ? 'READ' : 'UNREAD'}
        </span>
      </div>
    </div>
  );
}

export default BookCard;
