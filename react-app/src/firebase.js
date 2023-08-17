import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

 const firebaseConfig = {
  apiKey: "AIzaSyDjPrge6BLbxiyPNTRubYROgi66-i7OfJs",
  // apiKey: process.env.REACT_APP_apiKey;
  authDomain: "fp-foodrecipes.firebaseapp.com",
  projectId: "fp-foodrecipes",
  storageBucket: "fp-foodrecipes.appspot.com",
  messagingSenderId: "727349672149",
  appId: "1:727349672149:web:d95d2ed7f1a651d5914a5c",
  measurementId: "G-3XBFJ2PVPB",
};

const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// connectAuthEmulator(auth, process.env.REACT_APP_FIREBASE_AUTH_HOST);
// connectFirestoreEmulator(firestore, process.env.REACT_APP_FIREBASE_FIRESTORE_HOST);