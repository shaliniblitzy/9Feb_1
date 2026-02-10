// 9Feb_1 Tutorial Server
// Express.js application entry point — serves two GET endpoints

// Import the Express.js framework using CommonJS syntax
const express = require('express');

// Create a new Express application instance
const app = express();

// Define the port the server will listen on
const port = 3000;

// Register GET route for the root path "/"
// Responds with the exact plain-text string "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Register GET route for the "/evening" path
// Responds with the exact plain-text string "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
