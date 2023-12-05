const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/router.js'); // Import routes

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: '*', // This allows all origins, consider restricting this in production
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use('/', routes); // Use the imported routes

const port = 5050;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
