const express = require('express');
const app = express();

// Accede a vista User
app.use(require('./users'));

module.exports = app;