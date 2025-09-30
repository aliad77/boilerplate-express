require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Middleware - with error handling
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  } catch (error) {
    res.status(500).send('Error loading page');
  }
});

app.get('/json', (req, res) => {
  let message = 'Hello json';
  
  // Check environment variable
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  
  res.json({ message: message });
});

// Start server with error handling
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

module.exports = app;