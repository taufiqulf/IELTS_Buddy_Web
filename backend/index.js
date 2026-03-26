#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:6050', 'http://localhost:6060', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());
/**
 * Get port from environment and store in Express.
 */

// Set-up firebase
// Firebase admin initialization should occur only once in the app lifecycle.
const admin = require('firebase-admin');
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
let serviceAccount;

if (serviceAccountJson) {
  try {
    serviceAccount = JSON.parse(serviceAccountJson);
  } catch (error) {
    throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT JSON.');
  }
} else if (serviceAccountPath) {
  serviceAccount = require(path.resolve(serviceAccountPath));
} else {
  throw new Error(
    'Firebase service account not configured. Set FIREBASE_SERVICE_ACCOUNT or FIREBASE_SERVICE_ACCOUNT_PATH.'
  );
}

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
