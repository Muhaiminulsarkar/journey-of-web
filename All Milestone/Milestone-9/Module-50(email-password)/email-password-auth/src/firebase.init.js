// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2FOPj5QlOzOwlybvQI_kr9ih1JnCa8HE",
  authDomain: "email-password-auth-3b66f.firebaseapp.com",
  projectId: "email-password-auth-3b66f",
  storageBucket: "email-password-auth-3b66f.firebasestorage.app",
  messagingSenderId: "801105937400",
  appId: "1:801105937400:web:4c6c57b0c35023f17e0c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);