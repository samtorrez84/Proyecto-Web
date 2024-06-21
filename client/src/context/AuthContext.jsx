import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, deleteAcountRequest, logoutRequest } from '../api/auth.js';
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
    //const navigate = useNavigate();

    //Cuando se llame la función, Hace la petición y cuando reciba la respuesta, los datos deben quedar almacenado en el usuario
    const signup = async (user)=> {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setIsAuthenticated(true);
            setUser(res.data);
        }catch(error){
            if (Array.isArray(error.response.data)){
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
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

    const deleteAcount = async (id) => {
        try {
            console.log(`Quieres borrar el id: ${id}`);
            const response = await deleteAcountRequest(id);
            console.log(response.data);
    
            // Asumiendo que la respuesta del servidor es exitosa y la cuenta ha sido eliminada
            if (response.status === 200) {
                // Limpia la información del usuario y actualiza el estado de autenticación
                setIsAuthenticated(false);
                setUser(null);
                // Limpia cualquier cookie o token de sesión si es necesario
                // Cookies.remove('token'); // Si estás usando js-cookie por ejemplo
            }
        } catch (error) {
            console.error("Error al eliminar la cuenta:", error.response?.data?.message || error.message);
        }
    }

    const logout = async () => {
        try {
            console.log('Saliendo...')
            const result = await logoutRequest();
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Logout Error:', error);
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
            setUser,
            deleteAcount,
            logout,
            loading,
            user, 
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>

    )
}

