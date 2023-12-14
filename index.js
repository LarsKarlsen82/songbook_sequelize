const express = require('express');
const router = require('./Routes/router'); // Vær sikker på, at 'router.js' er i samme mappe som 'index.js'
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
