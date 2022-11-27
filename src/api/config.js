// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwgVZaP6-qqjvzYxpVcr2RdlAYj08OxSc",
  authDomain: "coderhouse-react-a09b8.firebaseapp.com",
  projectId: "coderhouse-react-a09b8",
  storageBucket: "coderhouse-react-a09b8.appspot.com",
  messagingSenderId: "1082253026302",
  appId: "1:1082253026302:web:f30edaede65ecfd63156af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore
export const db = getFirestore(app);