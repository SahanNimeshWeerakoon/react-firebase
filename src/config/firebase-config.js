import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBdNUG_iw7qMVQblWdFXmMr59Arqssjyo",
  authDomain: "react-firebase-9e6e0.firebaseapp.com",
  projectId: "react-firebase-9e6e0",
  storageBucket: "react-firebase-9e6e0.appspot.com",
  messagingSenderId: "207143627408",
  appId: "1:207143627408:web:54d1aa0aeee0b9b6680615",
  measurementId: "G-119DDKWXS6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);