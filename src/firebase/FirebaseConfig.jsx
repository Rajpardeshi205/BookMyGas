import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZZK0EehyJgUFwEGaeS847mE7tlB7-AJM",
  authDomain: "bookmygas-de376.firebaseapp.com",
  projectId: "bookmygas-de376",
  storageBucket: "bookmygas-de376.appspot.com",
  messagingSenderId: "59528592109",
  appId: "1:59528592109:web:5b6ac51b81b3ad86202ae4",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { fireDB, auth, db };
