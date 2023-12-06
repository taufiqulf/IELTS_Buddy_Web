#!/usr/bin/env node

/**
 * Module dependencies.
 */

const express = require('express');
const app = express();
const debug = require('debug')('bangkit-ielts-cloud:server');
const path = require('path'); // Import the path module
const router = require('./routes/router'); 

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '5050');
app.set('port', port);

/**
 * Point to React app build directory
 */

app.use('/', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src', 'frontpage.html'));
});

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
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = app.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = app; // Export the Express app instance