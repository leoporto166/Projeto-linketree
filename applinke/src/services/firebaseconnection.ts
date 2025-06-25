
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEoFUOZo88IRBZ-vA0LFBcc_qlkl1EHlQ",
  authDomain: "reactlinks-b82d5.firebaseapp.com",
  projectId: "reactlinks-b82d5",
  storageBucket: "reactlinks-b82d5.firebasestorage.app",
  messagingSenderId: "62184041672",
  appId: "1:62184041672:web:6a6e22056c8759031589fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}