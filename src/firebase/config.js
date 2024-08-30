// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrl49S6fSjHl8aESLsY0ah2z-9hKECJAg",
  authDomain: "vinyl-store-61cbc.firebaseapp.com",
  projectId: "vinyl-store-61cbc",
  storageBucket: "vinyl-store-61cbc.appspot.com",
  messagingSenderId: "464484620474",
  appId: "1:464484620474:web:5819517dd35f3b1fc38a83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
