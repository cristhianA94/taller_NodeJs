const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

//Permite crear Schemas
let Schema = mongoose.Schema;

//Schema User
let userSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    }
});

//Exporta el schema a 
module.exports = mongoose.model('User', userSchema);