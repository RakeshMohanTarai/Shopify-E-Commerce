const port = 4000;
const express = require("express"); // Import the Express.js framework
const app = express(); // Create an instance of the Express application                                  
const path = require("path"); // for working with file and directory paths
const cors = require("cors"); // for handling Cross-Origin Resource Sharing(connect frontend to backend)
const db = require('./config/mongoose');
const router = require('./routes/router');

// Parse incoming requests with JSON payloads
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Enable serving static files (images)
app.use('/images', express.static('upload/images'));

// Use the router for defining routes
app.use(router);

// Start the server
app.listen(port, (err) => {
    if (!err) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error : " + err);
    }
});
