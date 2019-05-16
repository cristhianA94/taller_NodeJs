const express = require('express');
//Permite usar todas las funcionalidades del server (put, post, get...)
const app = express();

//importa el Schema Users
const Rol = require('../models/users.js');


app.get('/rol', (req, res) => {

    Rol.find().exec((err, rolDB) => {

    });
    //res.send('Hello world');
});

//Realiza el post
app.post("/rol", (req, res) => {
    let body = req.body;
    // Crea un objeto del schema User con sus atributos
    let rolParaGuardar = new Rol({
        name: body.name,
        description: body.description,
    });
    //Guarda el registro en la BD
    rolParaGuardar.save((err, rolDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            })
        }
        if (!rolDB) {
            return res.status(400).json({
                ok: false,
                error: err
            })
        }
        res.status(200).json({
            ok: true,
            data: rolDB
        });
    });
});








module.exports = app;