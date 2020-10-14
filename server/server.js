const express = require('express');
const app = express();

// db setup
require('./models')();

// app setup
app.use(express.json());

// app routes
require('./controllers/authController')(app);
require('./controllers/productsController')(app);
require('./controllers/paymentController')(app);

// port
const PORT = 3001;
app.listen(PORT, console.log(`Server running on ${PORT}...`));
