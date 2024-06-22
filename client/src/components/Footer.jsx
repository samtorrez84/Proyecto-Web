import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom'; // Importar useLocation

const Footer = () => {
  const location = useLocation(); // Obtener la ubicación actual

  // Verificar si la ubicación actual es la ruta raíz
  const isRootPath = location.pathname === '/';

  return (
    <footer className={`bg-gray-900 text-white py-4 ${isRootPath ? 'bg-transparent' : ''}`} style={isRootPath ? null : { backgroundImage: "url('/fondo1.png')" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#ayuda" className="hover:text-pink-500">Ayuda</a>
          <a href="#preguntas" className="hover:text-pink-500">Preguntas</a>
          <a href="#soporte" className="hover:text-pink-500">Soporte técnico</a>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
          <a href="#privacidad" className="hover:text-pink-500">Política de privacidad</a>
          <a href="#legal" className="hover:text-pink-500">Información legal</a>
          <span className="text-gray-400">Copyright Riot Games</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.twitch.tv" className="text-2xl hover:text-pink-500"><i className="fab fa-twitch"></i></a>
          <a href="https://www.youtube.com" className="text-2xl hover:text-pink-500"><i className="fab fa-youtube"></i></a>
          <a href="https://www.xbox.com" className="text-2xl hover:text-pink-500"><i className="fab fa-xbox"></i></a>
          <a href="https://www.instagram.com" className="text-2xl hover:text-pink-500"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
