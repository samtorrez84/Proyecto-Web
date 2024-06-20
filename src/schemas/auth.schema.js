import {z} from 'zod';

//recibimos el req.body como objeto z
//Vamos a validar el registro
export const registerSchema = z.object({
    nombre: z.string({
        required_error: 'Usuario requerido'
    }),
    email: z.string({
        required_error: 'Correo requerido'
    })
    .email({
        message: 'Correo inválido'
    }),
    contrasena: z.string({
        required_error: 'Contraseña requerida'
    })
    .min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    })
})

//Vamos a validar el login
export const loginSchema = z.object({
    email: z.string({
        required_error: 'Correo requerido'
    })
    .email({
        message: 'Correo inválido'
    }),
    contrasena: z.string({
        required_error: 'Contraseña requerido'
    })
    .min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    })
})