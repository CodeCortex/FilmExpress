import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdIM_-4CwZQq2FPS5ES6DktnS2BhGDpug",
  authDomain: "filmexpress.firebaseapp.com",
  projectId: "filmexpress",
  storageBucket: "filmexpress.appspot.com",
  messagingSenderId: "935943081035",
  appId: "1:935943081035:web:0bed8db2eb35c5c11791ce"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef =collection(db,"movies");
export const reviewsRef =collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;