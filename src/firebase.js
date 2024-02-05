// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp9LzGP_kqyu9n6_3MniGxoIAt6DETV1U",
  authDomain: "react-chat-f1bf0.firebaseapp.com",
  projectId: "react-chat-f1bf0",
  storageBucket: "react-chat-f1bf0.appspot.com",
  messagingSenderId: "470888494306",
  appId: "1:470888494306:web:a9eae701f2cc3b312c5abb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);