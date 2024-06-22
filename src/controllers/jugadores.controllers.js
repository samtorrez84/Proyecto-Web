import Jugador from "../models/jugador.js"

export const obtenerJugadores = async (req, res) => {
    const jugadores = await Jugador.find()
    res.json(jugadores)
}

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

        const jugadroGuardado = await nuevoJugador.save();

        res.json(jugadroGuardado);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear el jugador' });
    }
}