const express = require('express');
//Permite usar todas las funcionalidades del server (put, post, get...)
const app = express();

//importa el Schema Users
const User = require('../models/users.js');


app.get('/user', (req, res) => {
    User.find({
        
    }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        res.status(200).json({
            ok: true,
            usuarioDB
        })
    });

    /* return res.json({
        "ok": true,
        'msg': "All ok"
    }); */
    //res.send('Hello world');
});

//Realiza el post
app.post("/user", (req, res) => {
    let body = req.body;
    // Crea un objeto del schema User con sus atributos
    let usuarioPorEditar = new User({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        userName: body.userName,
        password: body.password,
        age: body.age,
        rol: body.rol,
    });
    //Guarda el registro en la BD
    usuarioPorEditar.save((err, usuarioDB) => {
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
    let id = req.params.id
    let body = req.body;
    // Crea un objeto del schema User con sus atributos
    let usuarioPorEditar = {
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        userName: body.userName,
        password: body.password,
        age: body.age,
        rol: body.rol,
    }

    User.findByIdAndUpdate(id, usuarioPorEditar, {
            new: true,
            runValidators: true
        })
        //Guarda el registro en la BD
    usuarioPorEditar.save((err, usuarioDB) => {
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


//Realiza el post
app.delete("/user:id", (req, res) => {
    let id = req.params.id;
    let usuarioState = {
        state: false
    }

    /*  User.findByIdAndUpdate(id, usuarioState, {
         new = true
     }) */

});



module.exports = app;