const express = require('express');
const router = express.Router();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Serve the HTML front page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'frontpage.html'));
});

// Serve the static files for the dashboards
router.use('/dashboards', express.static(path.join(__dirname, '../../build')));

// Proxy requests to the React app
router.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:5050/dashboards/', // Replace with the URL of your React app
        changeOrigin: true,
    })
);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'frontpage.html'));
});

module.exports = router;