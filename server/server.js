const express = require('express');
const mongoose = require('mongoose');
const app = express();

// mongoDB setup
mongoose.connect('mongodb://localhost/ecomm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app setup
app.use(express.json());

// app endpoints
app.get('/', (req, res) => res.send('Hello World'));

// port
const PORT = 3001;
app.listen(PORT, console.log(`Server running on ${PORT}...`));
