import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importar useLocation
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation(); // Obtener la ubicación actual

  // Verificar si la ubicación actual es la ruta raíz
  const isRootPath = location.pathname === '/';

  return (
    <div className={`flex items-center justify-between p-4 ${isRootPath ? 'bg-transparent' : 'bg-gray-900'}`} style={isRootPath ? null : { backgroundImage: "url('/fondo1.png')" }}>
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="src/assets/images/LLA_LOGO.png" alt="Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex items-center flex-grow justify-end">
        {isAuthenticated ? (
          <>
            <Link to="/equipos" className="mx-2 px-4 py-2 bg-custom-pink text-white rounded-full hover:bg-custom-green hover:text-black font-bold">Equipos</Link>
            <Link to="/estadisticas" className="mx-2 px-4 py-2 bg-custom-pink text-white rounded-full hover:bg-custom-green hover:text-black font-bold">Estadísticas</Link>
          </>
        ) : (
          <Link to="/register" className="mx-2 px-4 py-2 bg-custom-blue text-white rounded-full hover:bg-custom-green hover:text-black font-bold">Registrarse</Link>
        )}
      </div>
      <div className="flex items-center">
        {isAuthenticated ? (
          <Link to="/profile" className="flex items-center">
            <div className="flex items-center ml-4">
              <span className="text-white mr-2 hidden md:block">Bienvenido {user.nombre}</span>
              <img src="src/assets/images/user.png" alt="User" className="h-8" />
            </div>
          </Link>
        ) : (
          <Link to="/login" className="mx-2 px-4 py-2 bg-custom-blue text-white rounded-full hover:bg-custom-green hover:text-black font-bold">Iniciar Sesión</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
  