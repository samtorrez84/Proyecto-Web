import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true //Limpia los espacios vacíos
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    }
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario; 