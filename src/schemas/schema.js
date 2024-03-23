const mongoose  = require("mongoose");

const clienteSchema = mongoose.Schema({
    
        nombre: {
            type:String,
            required: true
        },
        apellido:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        telefono: {
            type:String,
            required: true
        },
        empresa: {
            type:String
            
        },
        puesto: {
            type:String
        },
        estado: {
            type: Boolean
        } 
})

module.exports = mongoose.model('Cliente', clienteSchema)