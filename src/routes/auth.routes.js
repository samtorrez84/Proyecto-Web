import { Router } from "express";
import {login, register, logout, profile, verifyToken} from '../controllers/auth.controllers.js'
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register',validateSchema(registerSchema), register) //Cuando haga una petición post a register vas a ejecutar register
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/verify', verifyToken); 
router.get('/profile', authRequire, profile) //Ruta protectora de rutas. Primero se ejecita authRouter

export default router