import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js';
import Cookies from 'js-cookie'

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
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    //Vamos a leer el error que recibe en response
    const [errors, setErrors]= useState([]) //error se almacenará como arreglo 
    const [loading, setLoading] = useState(true)

    //Cuando se llame la función, Hace la petición y cuando reciba la respuesta, los datos deben quedar almacenado en el usuario
    const signup = async (user)=> {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }
        catch(err) {
            //console.log(err.response.data);
            setErrors(err.response.data);

        }
    }

    const singin = async (user)=> {
        try{
            const res = await loginRequest(user);
            console.log(res.data)
            setIsAuthenticated(true);
            setUser(res.data)
        }catch(error){
            if (Array.isArray(error.response.data)){
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    }

    
     useEffect(() => {
        if (errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])
    

    useEffect(() => {
        async function checkLogin() {
           const cookies = Cookies.get();
           if (!cookies.token) {
              setIsAuthenticated(false);
              setLoading(false);
              return setUser(null);  
           }
           try {
              const res = await verifyTokenRequest(cookies.token);
              console.log(`desde useEffect: ${res}`);
              if (!res.data) {
                setIsAuthenticated(false);
                setLoading(false);
                
                return;
              } 

              setIsAuthenticated(true);
              setUser(res.data);
              setLoading(false);
           } catch(error) {
              console.log(error)
              setIsAuthenticated(false);
              setUser(null);
              setLoading(false);
           }
        }
        checkLogin();
     }, []);
     


    return(
        <AuthContext.Provider 
        value={{ //Exporta
            signup,
            singin,
            loading,
            user, 
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>

    )
}