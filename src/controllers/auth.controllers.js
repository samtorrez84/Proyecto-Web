import Usuario from '../models/usuario.js'
import bcrypt from 'bcryptjs' //Encriptar
import jwt from 'jsonwebtoken'//Creador de token
import { createAcccesToken } from '../libs/jwt.js'
import { TOKEN_SECRET } from '../config.js'

export const register = async (req,res) => {
    const {email, contrasena, nombre} = req.body
    try{

        //Validación de usuario
        const userFound =  await Usuario.findOne({email})
        if (userFound) return res.status(400).json(['El email ya existe']);

       const contHash = await bcrypt.hash(contrasena, 10)  //Encriptar la contraseña

        const nuevoUsuario  = new Usuario({
            nombre, 
            email, 
            contrasena: contHash
        });

        
        //token: String que se recibe y es como un pase
        /** Esta parte del código fue cortada a jwt.js
         jwt.sign(
            {
                id: usuarioGuardado._id
                },
                'secret123',
                {
                    expiresIn: '1d' //expira en un día
                    },
                    (err, token) => {
                        if (err) console.log(err);
                        }
                        );
                        */
        
        const usuarioGuardado = await nuevoUsuario.save();
        const token = await createAcccesToken({id: usuarioGuardado._id})
                
        res.cookie('token', token); //Se envía por la cabecera

        res.json({
            id: usuarioGuardado._id,
            nombre: usuarioGuardado.nombre,
            email: usuarioGuardado.email,
            createdAt: usuarioGuardado.createdAt,
            updatedAt: usuarioGuardado.updatedAt
        })
    }
    catch (e){
        if (e.code === 11000) { // Código de error de duplicado de MongoDB
            res.status(400).json({
                message: 'El correo ya está registrado'
            });
        } else {
            console.log(e);
            res.status(500).json({
                message: 'Error en el servidor'
            });
        }
    }
}

export const login = async (req,res) => {
    const {email, contrasena} = req.body
    try{

        const usuarioEncontrado = await Usuario.findOne({email})
        if(!usuarioEncontrado){
            return res.status(400).json(['Usuario no encontrado'])
        }

       const coincide = await bcrypt.compare(contrasena, usuarioEncontrado.contrasena)  //Compara la contraseña con el usuario que se encuentra en la base de datos, retorna una contraseña

       if(!coincide){
            return res.status(400).json(['Contraseña incorrecta'])
       }

        const token = await createAcccesToken({id: usuarioEncontrado._id}) //Del usuario encontrado, toma la id y crea un token
                
        res.cookie('token', token) //Se envía por la cabecera
        
        res.json({
            id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.email,
            createdAt: usuarioEncontrado.createdAt,
            updatedAt: usuarioEncontrado.updatedAt
        })
         
    }
    catch (e){
        res.status(500).json({message: e.menssage})
    }
}

export const logout = (req,res) => {
    //Elimina el token
   res.cookie('token', '',{
    expires: new Date(0) 
   }) 
   return res.sendStatus(200)
}

export const profile = async  (req, res) => {  //El usuario se guarda en req.
    //console.log(req.user) //datos del usuario
    const usuarioEncontrado = await Usuario.findById(req.user.id)

    if (!usuarioEncontrado){
        res.status(400).json({message: 'Usuario no encontrado'})
    }
    return res.json({
        id: usuarioEncontrado._id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        createdAt: usuarioEncontrado.createdAt,
        updatedAt: usuarioEncontrado.updatedAt
    })
}

export const verifyToken = async(req, res) => {
    const {token} = req.cookies;
    if (!token) return res.status(401).json({message: 'No autorizado'})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({message: 'No autorizado'})

        const userFound = await Usuario.findById(user.id)
        if (!userFound) return res.status(401).json({message: 'No autorizado'})

        return res.json({
            id: userFound._id,
            nombre: userFound.nombre,
            email: userFound.email
        });
    })
}

export const deleteProfile = async(req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    res.clearCookie('token');
    res.status(200).send({ message: 'Cuenta eliminada con éxito' });
    // res.json(usuario) // Esto está de más y puede causar errores, ya enviaste una respuesta.
};

export const updateUserName = async (req, res) => {
    const { id } = req.params; // ID del usuario que queremos actualizar
    const { nombre } = req.body; // Nuevo nombre que queremos asignar

    try {
        // Buscar el usuario por ID y actualizar su nombre
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            id,
            { nombre },
            { new: true } // Esta opción hace que se retorne el documento actualizado
        );

        // Si el usuario no existe, devolver un error
        if (!usuarioActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Devolver el usuario actualizado
        return res.json({
            id: usuarioActualizado._id,
            nombre: usuarioActualizado.nombre,
            email: usuarioActualizado.email,
            createdAt: usuarioActualizado.createdAt,
            updatedAt: usuarioActualizado.updatedAt
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};