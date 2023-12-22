const express = require('express');
const router = express.Router();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { auth } = require('express-oauth2-jwt-bearer');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
const admin = require('firebase-admin');
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Multer configuration to store the incoming file in memory
const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

const db = admin.firestore();
const bucket = admin.storage().bucket();

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

  router.post('/listeningAudio', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
      }
  
      // Create a new unique ID for the file
      const blobName = uuidv4() + path.extname(req.file.originalname);
      const file = bucket.file(blobName);  // Corrected: Create a 'file' object
  
      const downloadToken = uuidv4();  // Generate a download token
      const metadata = {
        contentType: req.file.mimetype,
        metadata: {
          firebaseStorageDownloadTokens: downloadToken,
        },
      };
  
      const stream = file.createWriteStream({
        metadata: metadata,
      });
  
      stream.on('error', (error) => {
        console.error(error);
        return res.status(500).json({ error: 'Error uploading to Firebase Storage' });
      });
  
      stream.on('finish', async () => {
        await file.setMetadata(metadata); // Set the metadata with the download token
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(blobName)}?alt=media&token=${downloadToken}`;
        const audioDocumentRef = await db.collection('listeningAudio').add({ audioUrl: publicUrl, downloadToken: downloadToken });
        const documentId = audioDocumentRef.id;
        res.status(200).json({
          message: 'File uploaded successfully',
          audioUrl: publicUrl,
          documentId: documentId,
          downloadToken: downloadToken,
        });
      });
  
      stream.end(req.file.buffer);
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).json({ error: error.message });
    }
  });

// POST request handler for /api/listening
router.post('/listeningAnswer', checkJwt, async (req, res) => {
    try {
        const newAnswer = req.body;

        // Add validation as needed

        const addedAnswerRef = await db.collection('listeningAnswer').add(newAnswer);
        const documentId = addedAnswerRef.id; // Firestore generates a unique ID for each new document

        // Optionally, you can update the quiz with the questionID or just use the auto-generated ID
        await db.collection('listeningAnswer').doc(documentId).update({ documentId });

        res.status(201).json({ message: 'New listening answer added successfully', documentId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Post request to create listeningIndex where it contain AnswerID and TextID
router.post('/listeningIndex', checkJwt, async (req, res) => {
    try {
        const { AudioUrl, DownloadToken, AnswerIDs } = req.body;
        const newIndex = { AudioUrl, DownloadToken, AnswerIDs }; // Create a newIndex object

        const addedIndexRef = await db.collection('listeningIndex').add(newIndex);
        const documentId = addedIndexRef.id; // Firestore generates a unique ID for each new document

        res.status(201).json({ message: 'New listening index added successfully', documentId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

