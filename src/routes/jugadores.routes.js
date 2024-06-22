import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import { obtenerJugadores, crearJugador } from "../controllers/jugadores.controllers.js";

const router = Router();

router.get('/jugadores', authRequire, obtenerJugadores)
router.post('/jugadores', authRequire, crearJugador)

export default router