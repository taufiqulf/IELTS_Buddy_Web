const express = require('express');
const router = express.Router();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { auth } = require('express-oauth2-jwt-bearer');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require('jwks-rsa');
const admin = require('firebase-admin');
const cors = require('cors');

const db = admin.firestore();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://dev-5a8l23naqpi6qspn.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'localhost:5050/api',
  issuer: 'https://dev-5a8l23naqpi6qspn.us.auth0.com/',
  algorithms: ['RS256']
});
  
router.use(checkJwt);  

// For blank API
router.get('/', checkJwt, (req, res) => {
    res.json({ message: 'Please add Question ID' });
  });

// POST for input reading text
router.post('/readingText', checkJwt, async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const newText = req.body;

        if (typeof newText !== 'object' || newText === null) {
            return res.status(400).json({ error: "Invalid data format" });
        }

        // Add validation as needed

        const addedTextRef = await db.collection('ReadingText').add(newText);
        const documentId = addedTextRef.id; // Firestore generates a unique ID for each new document

        // Optionally, you can update the quiz with the questionID or just use the auto-generated ID
        await db.collection('ReadingText').doc(documentId).update({ documentId });

        res.status(201).json({ message: 'New reading text added successfully', documentId });
    } catch (error) {
        console.error('Error handling request:', error); // Log the error
        res.status(400).json({ error: error.message });
    }
});

// POST request handler for /api/reading
router.post('/readingAnswer', checkJwt, async (req, res) => {
    try {
        const newAnswer = req.body;

        // Add validation as needed

        const addedAnswerRef = await db.collection('ReadingAnswer').add(newAnswer);
        const documentId = addedAnswerRef.id; // Firestore generates a unique ID for each new document

        // Optionally, you can update the quiz with the questionID or just use the auto-generated ID
        await db.collection('ReadingAnswer').doc(documentId).update({ documentId });

        res.status(201).json({ message: 'New reading answer added successfully', documentId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Post request to create readingIndex where it contain AnswerID and TextID
router.post('/readingIndex', checkJwt, async (req, res) => {
    try {
        const newIndex = req.body;

        // Add validation as needed

        const addedIndexRef = await db.collection('ReadingIndex').add(newIndex);
        const documentId = addedIndexRef.id; // Firestore generates a unique ID for each new document

        // Optionally, you can update the quiz with the questionID or just use the auto-generated ID
        await db.collection('ReadingIndex').doc(documentId).update({ documentId });

        res.status(201).json({ message: 'New reading index added successfully', documentId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

