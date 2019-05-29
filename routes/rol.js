const express = require('express');
//Permite usar todas las funcionalidades del server (put, post, get...)
const app = express();

//importa el Schema Users
const Rol = require('../models/rol.js');


app.get('/rol', (req, res) => {
    //Buscar los que tengan el stado: TRUE
    Rol.find({
        //state: true
    }).exec((err, rolDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            rolDB
        })
    })
})


app.put('/rol/:id', (req, res) => {
    let id = req.params.id
    let body = req.body;

    let rolPorEditar = {
        name: body.name,
        description: body.description
    }

    Rol.findByIdAndUpdate(id, rolPorEditar, {
        new: true,
        runValidators: true
    }, (err, rolDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!rolDB) {
            return res.status(400).json({
                ok: false,
                rolDB
            });
        }
        res.status(200).json({
            ok: true,
            rolDB
        })
    })
})


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
            rolDB
        })
    })
})


app.delete('/rol/:id', (req, res) => {
    let id = req.params.id
    let rolState = {
        state: false
    }

    Rol.findByIdAndUpdate(id, rolState, {
        new: true,
        runValidators: true
    }, (err, rolDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!rolDB) {
            ok: false,
            rolDB
        }

        res.status(200).json({
            ok: true,
            rolDB
        })
    })
})


module.exports = app;