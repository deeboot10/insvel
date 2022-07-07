// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7NPEeQp4H61-agsAmqQNXXIf1Dt4a4WI",
  authDomain: "insvel-7debe.firebaseapp.com",
  projectId: "insvel-7debe",
  storageBucket: "insvel-7debe.appspot.com",
  messagingSenderId: "836202533560",
  appId: "1:836202533560:web:ebd38cbcc1d298d2755a4d",
  measurementId: "G-60Z3Q4CL06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
