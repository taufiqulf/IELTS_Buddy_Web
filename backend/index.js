#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

app.use(cors());
app.use(express.json());
/**
 * Get port from environment and store in Express.
 */

// Set-up firebase
// Firebase admin initialization should occur only once in the app lifecycle.
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "englishbuddydb.appspot.com"
  });

  // Initialize Router
  const router = require('./routes/router');

const port = normalizePort(process.env.PORT || '5050');
app.set('port', port);

/**
 * Point to React app build directory
 */

app.use('/', router); // Use the router module

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Server setup and listen on the given port on all network interfaces.
 */

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});