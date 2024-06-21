import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 hidden md:block">
          <a href="#ayuda" className="hover:text-pink-500">Ayuda</a>
          <a href="#preguntas" className="hover:text-pink-500">Preguntas</a>
          <a href="#soporte" className="hover:text-pink-500">Soporte técnico</a>
        </div>
        <div className="flex space-x-4">
          <a href="#privacidad" className="hover:text-pink-500">Política de privacidad</a>
          <a href="#legal" className="hover:text-pink-500">Información legal</a>
          <span>Copyright Riot Games</span>
        </div>
        <div className="flex space-x-4 hidden md:block">
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
