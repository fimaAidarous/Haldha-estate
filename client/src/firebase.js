// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-a9a55.firebaseapp.com",
  projectId: "mern-state-a9a55",
  storageBucket: "mern-state-a9a55.appspot.com",
  messagingSenderId: "895753054842",
  appId: "1:895753054842:web:7e4521ed0c8109c997a9c3",
  measurementId: "G-39572ZJ5ZZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);