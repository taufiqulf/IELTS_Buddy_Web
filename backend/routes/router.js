const express = require('express');
const router = express.Router();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Point to React app build directory
router.use(express.static(path.join(__dirname, '../../build')));

// Proxy requests to the React app
router.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:5050', // Replace with the URL of your React app
        changeOrigin: true,
    })
);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

module.exports = router;
