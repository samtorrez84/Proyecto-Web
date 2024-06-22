import mongoose from 'mongoose';

const jugadorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    nickname: {
        type: String,
        required: true,
        trim: true
    },
    posicion: {
        type: String,
        required: true,
        trim: true
    },
    equipo: {
        id: {
            type: Number,
            required: true
        },
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        url_logo: {
            type: String,
            required: true
        }
    },
    url_foto: {
        type: String,
        required: true
    },
    estadisticas: {
        mvps: {
            type: Number,
            required: true
        },
        kda: {
            type: Number,
            required: true
        }
    }
});

const Jugador = mongoose.model('Jugador', jugadorSchema);

export default Jugador;
