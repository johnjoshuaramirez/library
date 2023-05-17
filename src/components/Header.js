import { useState } from 'react';
import { auth, provider } from '../config/firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);

  onAuthStateChanged(auth, user => {
    setCurrentUser(user);
  });

  async function signInWithGoogle() {
    await signInWithPopup(auth, provider);
  }

  async function signOutUser() {
    await signOut(auth);
  }

  return (
    <header className="header">
      <span>Library</span>
      <nav>
        {currentUser ? (
          <>
            <span>{currentUser.displayName}</span>
            <span onClick={signOutUser} className="sign-out">
              Sign out
            </span>
          </>
        ) : (
          <span onClick={signInWithGoogle} className="sign-in">
            Sign in
          </span>
        )}
      </nav>
    </header>
  );
}

export default Header;
