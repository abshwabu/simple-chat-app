// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASKvPifk5ZXw-3835H8lqC6AqKYi_a3sY",
  authDomain: "simple-chatapp-7a21d.firebaseapp.com",
  projectId: "simple-chatapp-7a21d",
  storageBucket: "simple-chatapp-7a21d.appspot.com",
  messagingSenderId: "852153454813",
  appId: "1:852153454813:web:243299b6e290d595848b34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();