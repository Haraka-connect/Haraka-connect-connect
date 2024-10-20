const firebaseConfig = {
  apiKey: "AIzaSyCur_L5uw-Je3ZugQN9RHAkmfJq_H_SR8U",
  authDomain: "haraka-connect.firebaseapp.com",
  databaseURL: "https://haraka-connect-ug-default-rtdb.firebaseio.com",
  projectId: "haraka-connect",
  storageBucket: "haraka-connect.appspot.com",
  messagingSenderId: "659205805627",
  appId: "1:659205805627:android:5460d13133e79ccd3eee1e",
  measurementId: "https://haraka-connect-ug-75c03.web.app/" // Add if using Firebase Analytics
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
