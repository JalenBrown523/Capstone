// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFAjiuyxM0dVzsxmuwmvbdWwyMQr9jVQg",
  authDomain: "capstoneproject-4cfad.firebaseapp.com",
  projectId: "capstoneproject-4cfad",
  storageBucket: "capstoneproject-4cfad.appspot.com",
  messagingSenderId: "143395907906",
  appId: "1:143395907906:web:6c4643d3a88e2da73300db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };