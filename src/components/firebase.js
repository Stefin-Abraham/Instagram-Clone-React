// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEVRfzR8sfCIXDd34-BREZnIPGqS4ESuk",
  authDomain: "react-instagram-clone-c86cf.firebaseapp.com",
  projectId: "react-instagram-clone-c86cf",
  storageBucket: "react-instagram-clone-c86cf.appspot.com",
  messagingSenderId: "317882583962",
  appId: "1:317882583962:web:214c4f73d1b340f9d1c823",
  measurementId: "G-BSJ5X7ZMKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
