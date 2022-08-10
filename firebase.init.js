// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvSQKbppbfdj5qv9sau78-lWi09ysewyY",
  authDomain: "auto-car-84b2e.firebaseapp.com",
  projectId: "auto-car-84b2e",
  storageBucket: "auto-car-84b2e.appspot.com",
  messagingSenderId: "475894661533",
  appId: "1:475894661533:web:232db23bacd9c7e3bbaf74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
