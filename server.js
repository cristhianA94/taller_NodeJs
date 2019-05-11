//LLamar a Express
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Llamar al orm de mongoose
const mongoose = require('mongoose');
//Puerto del servidor
const port = 3000;

// ===========
// MiddleWare
//============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Enlaza las rutas (vistas)
app.use(require('./routes/index'));

//
mongoose.connect('mongodb://localhost:27017/sga', { useNewUrlParser: true }, (err, res) => {
    if (err) throw error;
    console.log(`Mongo is working :)`)
});

app.listen(port, () =>
    console.log(`running in the port ${port}`));