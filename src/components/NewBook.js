import { useDispatch } from 'react-redux';
import { toggleHidden } from '../features/form/formSlice';

function NewBook() {
  const dispatch = useDispatch();

  const handleNewBookClick = () => {
    dispatch(toggleHidden());
  };

  return (
    <div className="new-book" onClick={handleNewBookClick}>
      <span className="plus-mark">+</span>
      <p>New book</p>
    </div>
  );
}

export default NewBook;
