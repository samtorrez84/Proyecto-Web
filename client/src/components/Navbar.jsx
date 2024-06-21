import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="src/assets/images/LLA_LOGO.png" alt="Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex items-center flex-grow justify-end">
        <Link to="/equipos" className="mx-2 px-4 py-2 bg-pink-500 text-white rounded">Equipos</Link>
        <Link to="/estadisticas" className="mx-2 px-4 py-2 bg-green-500 text-white rounded">Estadísticas</Link>
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
          <Link to="/login" className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">Iniciar Sesión</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
