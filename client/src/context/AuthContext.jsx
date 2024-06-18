import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from '../api/auth.js';

export const AuthContext = createContext()

//Cuando se importe useAuth
//Se crea un hook para no estar importando el hook use context
export const useAuth = () => {
    const context = useContext(AuthContext) //Lee el contexxto y nos da el contexto
    //Verificamos que haya contexto
    if(!context) {
        throw new Error('useAuth debe estar dentro de un provider')
    }
    else{
        return context;
    }
}

//Componente que engloba a otros y recibi´ra un elemento hijo
export const AuthProvider = ({children}) => {
    //Cuando se hace un login o register, useSate debe ser llenado por los datos del usuario
    const [user, setUser] = useState(null);
    //Creamos un estado que sea de autenticación
    const[isAuthenticated, setIsAuhtenticated] = useState(false);
    //Vamos a leer el error que recibe en response
    const [errors, setErrors]= useState([]) //error se almacenará como arreglo 

    //Cuando se llame la función, Hace la petición y cuando reciba la respuesta, los datos deben quedar almacenado en el usuario
    const signup = async (user)=> {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuhtenticated(true);
        }
        catch(err) {
            //console.log(err.response.data);
            setErrors(err.response.data);

        }
    }

    const singin = async (user)=> {
        try{
            const res = await loginRequest(user);
            console.log(res)
        }catch(error){
            if (Array.isArray(error.response.data)){
                setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    }

    return(
        <AuthContext.Provider 
        value={{ //Exporta
            signup,
            singin,
            user, 
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>

    )
}