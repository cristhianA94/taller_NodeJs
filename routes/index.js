const express = require('express');
const app = express();

// Accede a vista User
app.use(require('./users.js'));
//app.use(require('./rol'));
//app.use(require('./sala'));
//app.use(require('./permiso_acceso'));
//app.use(require('./permiso_rol'));
//app.use(require('./login'));

module.exports = app;