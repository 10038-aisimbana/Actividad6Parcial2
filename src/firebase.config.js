// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc0cmeauCYSE7q-Iz1dQ-4w2rSE1HrUx4",
  authDomain: "actividad6parcial2.firebaseapp.com",
  projectId: "actividad6parcial2",
  storageBucket: "actividad6parcial2.appspot.com",
  messagingSenderId: "335583812695",
  appId: "1:335583812695:web:fad13d6c0db3d934729712",
  measurementId: "G-537DN5B3PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);