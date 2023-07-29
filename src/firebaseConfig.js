// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL6lDNlAqL3ElY7KU3HG4ZkB1p536yeww",
  authDomain: "ecommerce-ethereal.firebaseapp.com",
  projectId: "ecommerce-ethereal",
  storageBucket: "ecommerce-ethereal.appspot.com",
  messagingSenderId: "213940049136",
  appId: "1:213940049136:web:ef9a8a9be894309c341e35",
  measurementId: "G-K41CWV8YQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
