// Este componente es un contenedor para el resto de la aplicación. Se encarga de renderizar el Navbar en todas las rutas excepto en las rutas de login y register.

import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const excludeNavbarPaths = ['/login', '/register'];
  
  return (
    <>
      {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
      <div>{children}</div>
    </>
  );
};

export default Layout;
