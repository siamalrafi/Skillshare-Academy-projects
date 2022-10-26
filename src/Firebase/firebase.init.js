// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6NZBvC-jOWjOSGN_LmgO6tV9JbOTTy8w",
  authDomain: "skillshare-academy.firebaseapp.com",
  projectId: "skillshare-academy",
  storageBucket: "skillshare-academy.appspot.com",
  messagingSenderId: "581182626222",
  appId: "1:581182626222:web:f8a4da20f24228afe3903f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;