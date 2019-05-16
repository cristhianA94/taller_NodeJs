const express = require('express');
//Permite usar todas las funcionalidades del server (put, post, get...)
const app = express();

//importa el Schema Users
const User = require('../models/users.js');


app.get('/user', (req, res) => {
    return res.json({
        "ok": true,
        'msg': "All ok"
    });
    //res.send('Hello world');
});

//Realiza el post
app.post("/user", (req, res) => {
    let body = req.body;
    // Crea un objeto del schema User con sus atributos
    let userGuardar = new User({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        userName: body.userName,
        password: body.password,
        age: body.age,
        rol: body.rol,
        state: body.state
    });
    //Guarda el registro en la BD
    userGuardar.save((err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            })
        }
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                error: err
            })
        }
        res.status(200).json({
            ok: true,
            data: usuarioDB
        });
    });
});

//Realiza el put
app.put("/user/id", (req, res) => {
    let body = req.body;
    // Crea un objeto del schema User con sus atributos
    let userGuardar = new User({
        nombre: body.nombre,
        apellido: body.apellido,
        age: body.edad
    });
    //Guarda el registro en la BD
    userGuardar.save((err, usuarioDB) => {
        //
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            })
        }
        //Si no encuentra nada en la BD
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                error: err
            })
        }
        //Si sale bien todo
        res.status(200).json({
            ok: true,
            data: usuarioDB
        });
    });
});

module.exports = app;