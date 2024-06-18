import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//Agregar las rutas
import authRoutes from './routes/auth.routes.js';

const app = express();

//Middleware
app.use(cors({
    origin: 'http://localhost:5173',
})); //Podemos comunicar los servidores
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Este middleware parsea las cookies


//Definir rutas primero con /api
app.use('/api',authRoutes);

export default app;