const express = require('express');
//Permite usar todas las funcionalidades del server (put, post, get...)
const app = express();

//importa el Schema Users
const Sala = require('../models/sala.js');


app.get('/sala', (req, res) => {
    //Buscar los que tengan el stado: TRUE
    Sala.find({
        //state: true
    }).exec((err, salaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            salaDB
        })
    })
})


app.put('/sala/:id', (req, res) => {
    let id = req.params.id
    let body = req.body;

    let salaPorEditar = {
        name: body.name,
        description: body.description
    }

    Sala.findByIdAndUpdate(id, salaPorEditar, {
        new: true,
        runValidators: true
    }, (err, salaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!salaDB) {
            return res.status(400).json({
                ok: false,
                salaDB
            });
        }
        res.status(200).json({
            ok: true,
            salaDB
        })
    })
})


app.post("/sala", (req, res) => {
    let body = req.body;
    // Crea un objeto del schema User con sus atributos
    let salaParaGuardar = new Sala({
        name: body.name,
        description: body.description,
    });
    //Guarda el registro en la BD
    salaParaGuardar.save((err, salaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            })
        }
        if (!salaDB) {
            return res.status(400).json({
                ok: false,
                error: err
            })
        }
        res.status(200).json({
            ok: true,
            salaDB
        })
    })
})


app.delete('/sala/:id', (req, res) => {
    let id = req.params.id
    let salaState = {
        state: false
    }

    Sala.findByIdAndUpdate(id, salaState, {
        new: true,
        runValidators: true
    }, (err, salaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!salaDB) {
            ok: false,
            salaDB
        }

        res.status(200).json({
            ok: true,
            salaDB
        })
    })
})


module.exports = app;