import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBDTxIaEIGFNZ4WtO2ZXXmFCOliwMwiRcs',
  authDomain: 'library-d5dec.firebaseapp.com',
  projectId: 'library-d5dec',
  storageBucket: 'library-d5dec.appspot.com',
  messagingSenderId: '745374095408',
  appId: '1:745374095408:web:9d646f289d9d7b9ba335f5'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();