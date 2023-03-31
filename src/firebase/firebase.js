// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOaZU4FEDNa0T7s0soeTpUWFHAWITSsBw",
  authDomain: "biodata-f3cd7.firebaseapp.com",
  databaseURL: "https://biodata-f3cd7-default-rtdb.firebaseio.com",
  projectId: "biodata-f3cd7",
  storageBucket: "biodata-f3cd7.appspot.com",
  messagingSenderId: "400119128167",
  appId: "1:400119128167:web:8e6c47016408df65ebb4c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
