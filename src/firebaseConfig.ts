// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKVZrEC62UKH3aH1fJyViIj2uxbzBYi0A",
  authDomain: "quizzi-76e7b.firebaseapp.com",
  projectId: "quizzi-76e7b",
  storageBucket: "quizzi-76e7b.appspot.com",
  messagingSenderId: "787591935563",
  appId: "1:787591935563:web:06180a94ea150a38b8ffce",
  measurementId: "G-TRD47CF2Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);