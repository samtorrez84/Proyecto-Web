import React from 'react';
import { Link } from 'react-router-dom';

function TestPage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url('/fondohome.jpg')` }}>
      <div className="flex-grow flex flex-col items-center justify-center text-center text-white px-4 bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold mb-4">Bienvenido</h1>
        <p className="text-lg mb-6">Descubre lo último en partidos de LOL</p>
        <Link to="/register" className="bg-custom-blue hover:bg-custom-pink text-white font-bold py-3 px-6 rounded-full transition duration-300 mb-4">
          UNIRSE GRATIS
        </Link>
       
      </div>
     
    </div>
  );
}

export default TestPage;
