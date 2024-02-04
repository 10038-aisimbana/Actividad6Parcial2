import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

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
export const auth = getAuth(app)
