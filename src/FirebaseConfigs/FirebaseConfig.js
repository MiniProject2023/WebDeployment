import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhzzJYlyFAlJ8wcmIhrg--Rf7EW0vRVeg",
  authDomain: "miniproject168-a6353.firebaseapp.com",
  databaseURL: "https://miniproject168-a6353-default-rtdb.firebaseio.com",
  projectId: "miniproject168-a6353",
  storageBucket: "miniproject168-a6353.appspot.com",
  messagingSenderId: "1025594863073",
  appId: "1:1025594863073:web:fdc87f699dbbae20cc76a0",
  measurementId: "G-636PVFSGNQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
