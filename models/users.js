const mongoose = require('mongoose');
//Controla las validaciones de duplicados
const uniqueValidator = require('mongoose-unique-validator');

//Permite crear Schemas
let Schema = mongoose.Schema;

//Schema User
let userSchema = new Schema({
    name: {
        type: String,
        //Restriccion si no esta lleno el campo
        required: [true, "El nombre es requerido"]
    },
    lastName: {
        type: String,
        required: [true, "El apellido es requerido"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"]
    },
    userName: {
        type: String,
        required: [true, "El usuario es requerido"]
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, "El rol es requerido"]
    },
    state: {
        type: Boolean,
        default: true
    }
});


//Coge el objeto User y lo modifica
userSchema.methods.toJSON = function() {
    let user = this
        //Agarra las propiedades del objeto
    let user_object = user.toObject()
        //Borra el campo password
    delete user_object.password
    return user_object
}

//Imprime error al haber alguna duplicacion de datos
userSchema.plugin(uniqueValidator, {
    message: `{PATH} debe ser unico`
});



//Exporta el schema a 
module.exports = mongoose.model('User', userSchema);