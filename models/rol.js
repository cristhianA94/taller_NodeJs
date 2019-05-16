const mongoose = require('mongoose');

//Permite crear Schemas
let Schema = mongoose.Schema;

//Schema rol
let rolSchema = new Schema({
    name: {
        type: String,
        //Restriccion si no esta lleno el campo
        required: [true, "El rol es requerido"]
    },
    description: {
        type: String,
        required: [true, "La descripcion es requerida"]
    }
});


//Exporta el schema a BD
// Rol, nombre tabla que va air en Mongo
module.exports = mongoose.model('Rol', rolSchema);