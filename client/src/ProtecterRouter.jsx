import { useAuth } from "./context/AuthContext"
import {Navigate, Outlet} from 'react-router-dom'

function ProtecterRouter() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
     return <h1>Loading...</h1>; // Considerar un spinner o un componente de carga más atractivo
  }

  // Agrega una condición para manejar el estado intermedio
  if (!isAuthenticated && !loading) {
     console.log("Redirecting to login because user is not authenticated.");
     return <Navigate to='/login' replace />;
  }

  return <Outlet />;
}
export default ProtecterRouter