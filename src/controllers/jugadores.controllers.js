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

// Obtener un jugador por su nickname
export const obtenerJugadorPorNombre = async (req, res) => {
    const { nickname } = req.params;
    
    try {
        const jugador = await Jugador.findOne({ nickname: nickname });
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

// Actualizar un jugador por su nickname
export const actualizarJugadorPorNombre = async (req, res) => {
    const { nickname } = req.params;
    const { nombre, posicion, equipo, url_foto, estadisticas } = req.body;
    
    try {
        const jugador = await Jugador.findOne({ nickname: nickname });
        if (jugador) {
            jugador.nombre = nombre;
            jugador.posicion = posicion;
            jugador.equipo = equipo;
            jugador.url_foto = url_foto;
            jugador.estadisticas = estadisticas;
            const jugadorActualizado = await jugador.save();
            res.json(jugadorActualizado);
        } else {
            res.status(404).json({ message: 'Jugador no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar el jugador' });
    }
};


// Eliminar un jugador por su nickname
export const eliminarJugadorPorNombre = async (req, res) => {
    const { nickname } = req.params;
    
    try {
        const jugador = await Jugador.findOne({ nickname });
        if (jugador) {
            await jugador.remove();
            res.json({ message: 'Jugador eliminado' });
        } else {
            res.status(404).json({ message: 'Jugador no encontrado' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar el jugador' });
    }
}
