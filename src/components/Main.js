import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../features/main/mainSlice,';
import { db } from '../config/firebase';
import {
  collection,
  doc,
  query,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  orderBy
} from 'firebase/firestore';
import Card from './Card';
import NewCard from './NewCard';
import Form from './Form';

function Main() {
  const books = useSelector(state => state.main.books);
  const dispatch = useDispatch();

  async function getBooks() {
    const colRef = collection(db, 'books');
    const querySnapshot = await getDocs(query(colRef, orderBy('timeStamp', 'desc')));
    const books = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    dispatch(setBooks(books));
  }

  async function updateBook(id) {
    const docRef = doc(db, 'books', id);
    const docSnap = await getDoc(docRef);
    await updateDoc(docRef, { status: !docSnap.data().status });
    getBooks();
  }

  async function deleteBook(id) {
    const docRef = doc(db, 'books', id);
    await deleteDoc(docRef);
    getBooks();
  }

  return (
    <div className="main">
      <NewCard />
      {books.map(book => (
        <Card
          key={book.id}
          {...book}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
      ))}
      <Form getBooks={getBooks} />
    </div>
  );
}

export default Main;
