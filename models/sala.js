const mongoose = require('mongoose');
//Controla las validaciones de duplicados
const uniqueValidator = require('mongoose-unique-validator');

//Permite crear Schemas
let Schema = mongoose.Schema;

//Schema rol
let salaSchema = new Schema({
    name: {
        type: String,
        //Restriccion si no esta lleno el campo
        required: [true, "El nombre de la sala es requerido"]
    },
    description: {
        type: String,
        required: [true, "La descripcion es requerida"]
    },
    state: {
        type: Boolean,
        default: true
    }
});


/* //Coge el objeto User y lo modifica
salaSchema.methods.toJSON = function() {
    let sala = this
        //Agarra las propiedades del objeto
    let sala_object = sala.toObject()
    return sala_object
}
 */

//Imprime error al haber alguna duplicacion de datos
salaSchema.plugin(uniqueValidator, {
    message: `{PATH} debe ser unico`
});


//Exporta el schema a BD
// Rol, nombre tabla que va air en Mongo
module.exports = mongoose.model('Sala', salaSchema);