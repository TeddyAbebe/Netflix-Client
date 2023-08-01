import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCWqmchsMbwfLzrOaQFxjxxc6SK01PxAx0",
  authDomain: "react-netflix-clone-7fdb6.firebaseapp.com",
  projectId: "react-netflix-clone-7fdb6",
  storageBucket: "react-netflix-clone-7fdb6.appspot.com",
  messagingSenderId: "809369274683",
  appId: "1:809369274683:web:14c84e83dc66024966cf1e",
  measurementId: "G-21XD9EGSGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
