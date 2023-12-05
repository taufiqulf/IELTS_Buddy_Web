const express = require('express');
const router = express.Router();

// Example route
router.get('/lessons', (req, res) => {
    // Fetch and send lessons data
    res.json({ message: "Here are your lessons" });
});

module.exports = router;
