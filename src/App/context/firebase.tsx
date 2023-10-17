// Firebase
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCty8z4jHF3SUU9yrQWq4Dk7VHX2WbyI9o",
  authDomain: "todolist-react-ts.firebaseapp.com",
  projectId: "todolist-react-ts",
  storageBucket: "todolist-react-ts.appspot.com",
  messagingSenderId: "1062471774859",
  appId: "1:1062471774859:web:bc1748d0c6656478e2da8e",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);

export const db = getFirestore(app);
