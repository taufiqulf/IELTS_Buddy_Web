const express = require('express');
const router = express.Router();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const readingroute = require('./readingroutes');
const listeningroute = require('./listeningroutes');

// For blank API
router.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the EnglishBuddy' });
  });

// For blank API redirect to homepage frontend
router.get('/', (req, res) => {
    res.redirect('http://localhost:6050');
});

// Dashboard API endpoint
router.get('/api/dashboard', (req, res) => {
    res.json({ message: 'Welcome to the Dashboard API' });
  });

// Admin API endpoint, protected with Kinde authentication
router.use('/api/reading', readingroute);

// Admin API endpoint listening, protected with Kinde authentication
router.use('/api/listening', listeningroute);

module.exports = router;