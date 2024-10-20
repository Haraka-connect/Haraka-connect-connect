// app.js

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const admin = require('firebase-admin');
const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Update with your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://haraka-connect.firebaseio.com", // Replace with your Firebase Database URL
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the signup form
app.get('/signup', (req, res) => {
  res.send(`
    <form action="/signup" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Sign Up</button>
    </form>
  `);
});

// Handle signup form submission
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a user object to store in the database
  const userData = {
    username: username,
    email: email,
    password: hashedPassword,
  };

  // Save the user data to Firebase Realtime Database
  try {
    const db = admin.database();
    const ref = db.ref('users'); // 'users' is the node where data will be stored
    const newUserRef = ref.push(); // Create a new user entry
    await newUserRef.set(userData); // Set user data

    res.send(`User created successfully: ${newUserRef.key}`);
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Error creating user. Please try again.");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
