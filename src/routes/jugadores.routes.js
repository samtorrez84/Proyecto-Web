import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import { obtenerJugadores, crearJugador, obtenerJugadorPorNombre } from "../controllers/jugadores.controllers.js";

const router = Router();

router.get('/jugadores', authRequire, obtenerJugadores)
router.get('/jugadores/:nombre', authRequire, obtenerJugadorPorNombre)
router.post('/jugadores', authRequire, crearJugador)

export default router