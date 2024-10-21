// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHOXKFxFRS8lfidTf5LeW0q8X16k5jA10",
  authDomain: "haraka-connect.firebaseapp.com",
  projectId: "haraka-connect",
  storageBucket: "haraka-connect.appspot.com",
  messagingSenderId: "659205805627",
  appId: "1:659205805627:web:d0c47abdeac646de3eee1e",
  measurementId: "G-SDKJG83QWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
