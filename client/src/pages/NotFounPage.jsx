import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex h-screen items-center justify-center  text-white">
      <div className="text-center px-6">
        <FaExclamationTriangle className="text-yellow-400 text-8xl mb-8 mx-auto" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Lo sentimos, la página que estás buscando no existe.</p>
        <Link
          to="/"
          className="inline-block bg-custom-blue text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
