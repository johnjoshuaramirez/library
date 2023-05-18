import { auth } from '../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleHidden,
  setTitle,
  setAuthor,
  setPages,
  setIsRead,
  clearForm
} from '../features/form/formSlice';
import { addBook, fetchBooks } from '../features/books/booksSlice';
import Input from './common/Input';
import CheckBox from './common/CheckBox';

function BookForm() {
  const isHidden = useSelector((state) => state.form.isHidden);
  const title = useSelector((state) => state.form.title);
  const author = useSelector((state) => state.form.author);
  const pages = useSelector((state) => state.form.pages);
  const isRead = useSelector((state) => state.form.isRead);
  const userId = useSelector((state) => state.user.userId);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains('wrapper')) {
      dispatch(toggleHidden());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert('User is not signed in');
      dispatch(toggleHidden());
      dispatch(clearForm());
      return;
    }

    dispatch(addBook({ userId, title, author, pages, isRead }));
    dispatch(fetchBooks(userId));
    dispatch(toggleHidden());
    dispatch(clearForm());
  };

  return (
    <div className={`wrapper ${isHidden && 'hidden'}`} onClick={handleClick}>
      <form className="book-form" onSubmit={handleSubmit}>
        <h3>Book Form</h3>
        <Input
          type="text"
          onChange={(e) => dispatch(setTitle(e.target.value))}
          value={title}
          placeholder="Title"
        />
        <Input
          type="text"
          onChange={(e) => dispatch(setAuthor(e.target.value))}
          value={author}
          placeholder="Author"
        />
        <Input
          type="number"
          onChange={(e) => dispatch(setPages(e.target.value))}
          value={pages}
          placeholder="Pages"
        />
        <CheckBox
          onChange={(e) => dispatch(setIsRead(e.target.checked))}
          checked={isRead}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookForm;
