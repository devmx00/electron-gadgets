// import env variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// import modules
const path = require('path');
const express = require('express');
const app = express();
const connectDB = require('./models');

// db setup
connectDB();

// app setup
app.use(express.json());

// app routes
require('./routes/authRoutes')(app);
require('./routes/productsRoutes')(app);
require('./routes/paymentRoutes')(app);

// static files & unrecognize routes setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client', 'build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  );
}

// port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on ${PORT}..`));
