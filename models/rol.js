const mongoose = require('mongoose');
//Controla las validaciones de duplicados
const uniqueValidator = require('mongoose-unique-validator');

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

/* 
//Coge el objeto User y lo modifica
rolSchema.methods.toJSON = function() {
    let rol = this
        //Agarra las propiedades del objeto
    let rol_object = rol.toObject()
    return rol_object
}


//Imprime error al haber alguna duplicacion de datos
rolSchema.plugin(uniqueValidator, {
    message: `{PATH} debe ser unico`
});
 */

//Exporta el schema a BD
// Rol, nombre tabla que va air en Mongo
module.exports = mongoose.model('Rol', rolSchema);