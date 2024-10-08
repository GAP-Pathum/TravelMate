// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA25EX4hqh9sNt2Efs4yeSVy-DwS95bcGc",
  authDomain: "ai-traveler-app.firebaseapp.com",
  projectId: "ai-traveler-app",
  storageBucket: "ai-traveler-app.appspot.com",
  messagingSenderId: "603526474654",
  appId: "1:603526474654:web:1bd0ed45c6c791f5dd048f",
  measurementId: "G-90Q7LKBDR8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass the initialized app instance to getAuth
