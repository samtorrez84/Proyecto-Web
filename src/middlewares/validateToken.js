import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';


//Si el usuario esta registrado o no
//Antes de que llegue a la ruta profile, este archivo debe ejecutarse.

/*
export const authRequire = (req, res, next) => {
    const {token} = req.cookies;

    // Aquí puedes añadir la lógica para verificar el token si es necesario
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
};
*/

export const authRequire = (req, res, next) => {
    const { token } = req.cookies;

    console.log(token); // Deberías ver el token aquí si está presente en las cookies

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {  //
        if (err) return res.status(403).json({ message: 'Invalid token' });
        
        // Puedes agregar el usuario decodificado al objeto req para su uso posterior
        //console.log(user)
        req.user = user
        next();
    });
};
