const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;

// process.env.PORT
// process.env.NODE_ENV => production or undefined

// middleware
app.use(express.json()); // req.body
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // serve static content

  app.use(express.static(path.join(__dirname, 'client/build')));
}

// routes

// register and login routes
app.use('/auth', require('./routes/jwtAuth'));

// dashboard route
app.use('/dashboard', require('./routes/dashboard'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
