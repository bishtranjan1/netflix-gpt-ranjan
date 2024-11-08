// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwig4jep7qgZ8utnspzEeytdaZAhtnTxw",
  authDomain: "netflixgpt-1872c.firebaseapp.com",
  projectId: "netflixgpt-1872c",
  storageBucket: "netflixgpt-1872c.firebasestorage.app",
  messagingSenderId: "610745604553",
  appId: "1:610745604553:web:24454020e4026ed5dcf018",
  measurementId: "G-ZDEJ7DK822",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
