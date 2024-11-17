// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkHAR9vamrwBwYRaaBLtx2tk_su9m29Nk",
    authDomain: "simple-firebasee-7c21d.firebaseapp.com",
    projectId: "simple-firebasee-7c21d",
    storageBucket: "simple-firebasee-7c21d.firebasestorage.app",
    messagingSenderId: "266830221125",
    appId: "1:266830221125:web:b72c44c8903c47800cf82c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;