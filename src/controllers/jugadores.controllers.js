import Jugador from "../models/jugador.js";

// Obtener todos los jugadores
export const obtenerJugadores = async (req, res) => {
    try {
        const jugadores = await Jugador.find();
        res.json(jugadores);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener los jugadores' });
    }
};

// Crear un nuevo jugador
export const crearJugador = async (req, res) => {
    const { nombre, nickname, posicion, equipo, url_foto, estadisticas } = req.body;
    
    try {
        const nuevoJugador = new Jugador({
            nombre,
            nickname,
            posicion,
            equipo,
            url_foto,
            estadisticas
        });

        const jugadorGuardado = await nuevoJugador.save();
        res.json(jugadorGuardado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear el jugador' });
    }
};

// Obtener un jugador por su nombre
export const obtenerJugadorPorNombre = async (req, res) => {
    const { nombre } = req.params;
    
    try {
        const jugador = await Jugador.findOne({ nombre: nombre });
        if (jugador) {
            res.json(jugador);
        } else {
            res.status(404).json({ message: 'Jugador no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener el jugador' });
    }
};
