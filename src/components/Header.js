import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { provider, auth } from '../config/firebase';
import {
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged
} from 'firebase/auth';
import {
  setUserName,
  clearUserName,
  setUserId
} from '../features/user/userSlice';
import { fetchBooks, resetBooks } from '../features/books/booksSlice';

function Header() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = user.displayName;
        const userId = user.uid;
        localStorage.setItem('username', username);
        dispatch(setUserName(username));
        dispatch(setUserId(userId));
        dispatch(fetchBooks(userId));
      } else {
        localStorage.removeItem('username');
        dispatch(clearUserName());
        dispatch(resetBooks());
      }
    });
  }, [dispatch]);

  const signInWithGoogle = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header">
      <span>Library</span>
      <nav>
        {username ? (
          <>
            <span>{username}</span>
            <span className="sign-out" onClick={handleSignOut}>
              Sign out
            </span>
          </>
        ) : (
          <span className="sign-in" onClick={signInWithGoogle}>
            Sign in
          </span>
        )}
      </nav>
    </header>
  );
}

export default Header;
