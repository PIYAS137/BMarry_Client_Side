// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA21UK4SZYXFmKvOMBqI3Nzraj3W_8FduI",
  authDomain: "bmarry.firebaseapp.com",
  projectId: "bmarry",
  storageBucket: "bmarry.appspot.com",
  messagingSenderId: "406729445404",
  appId: "1:406729445404:web:82354e7d0dd67752fd8fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;