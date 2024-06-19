import { useAuth } from "./context/AuthContext"
import {Navigate, Outlet} from 'react-router-dom'

function ProtecterRouter() {
   const {loading, isAuthenticated} = useAuth();
   console.log(`desde protect router ${loading}, ${isAuthenticated}`)

   if (loading) return <h1>Loading...</h1>
   {/* Si el usuario no esta autenticado lo direcciona a /login sino continua su ejecución al elemento normal */}
   if(!isAuthenticated && !loading) return <Navigate to='/login' replace/>;

  return <Outlet/>;
}

export default ProtecterRouter