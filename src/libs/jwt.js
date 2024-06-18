import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export function createAcccesToken(payload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            //'secret123',
            TOKEN_SECRET,
            {
                expiresIn: '1d' //expira en un día
            },
            (err, token) => {
                if (err) reject (err)
                resolve(token)
            }
        );
    })
}