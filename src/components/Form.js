import { useSelector, useDispatch } from 'react-redux';
import {
  setTitle,
  setAuthor,
  setPages,
  setStatus
} from '../features/input/inputSlice';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Form({ hidden, setHidden, getBooks }) {
  const title = useSelector(state => state.input.title);
  const author = useSelector(state => state.input.author);
  const pages = useSelector(state => state.input.pages);
  const status = useSelector(state => state.input.status);
  const dispatch = useDispatch();

  function hide(e) {
    if (e.target.matches('.wrapper')) {
      setHidden(true);
    }
  }

  async function addBook(e) {
    e.preventDefault();
    const colRef = collection(db, 'books');
    await addDoc(colRef, {
      title: title,
      author: author,
      pages: pages,
      status: status,
      timeStamp: serverTimestamp()
    });
    setHidden(true);
    getBooks();
  }

  return (
    <div className={`wrapper ${hidden && 'hidden'}`} onClick={hide}>
      <form className="form" onSubmit={addBook}>
        <h3>Book Form</h3>
        <input
          onChange={e => dispatch(setTitle(e.target.value))}
          value={title}
          type="text"
          placeholder="Title"
          required
        />
        <input
          onChange={e => dispatch(setAuthor(e.target.value))}
          value={author}
          type="text"
          placeholder="Author"
          required
        />
        <input
          onChange={e => dispatch(setPages(e.target.value))}
          value={pages}
          type="number"
          placeholder="Pages"
          min="0"
          required
        />
        <label className="checkbox">
          Have you read this book?
          <input
            onChange={e => dispatch(setStatus(e.target.checked))}
            checked={status}
            type="checkbox"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;