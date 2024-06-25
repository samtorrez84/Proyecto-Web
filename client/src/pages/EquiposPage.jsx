import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PlayOffs from '../components/PlayOffs';
import PlayerDisplay from '../components/PlayerDisplay';

import { obtenerJugadorPorNombre } from '../api/jugadores';

const EquiposPage = () => {
  const [jugador, setJugador] = useState(null);

  useEffect(() => {
    const fetchJugador = async () => {
      try {
        const response = await obtenerJugadorPorNombre('Pan');
        setJugador(response.data);
      } catch (error) {
        console.error('Error al obtener el jugador:', error);
      }
    };

    fetchJugador();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-center lg:items-start">
          <div className="w-full lg:w-3/4">
            <PlayOffs />
          </div>
          <div className="w-full lg:w-1/4 py-6 flex flex-col items-center justify-center lg:mt-0 mt-6">
            <div className="bg-custom-green text-black font-bold py-2 px-4 rounded-full inline-block mb-4 text-center lg:text-left w-full lg:w-auto">MVP</div>
            {jugador ? (
              <PlayerDisplay
                playerName={jugador.jugador}
                url_team={jugador.equipo.url_logo}
                url_foto={jugador.url_foto}
                position={jugador.posicion}
              />
            ) : (
              <div>Cargando...</div>
            )}
            <div className="flex flex-col items-center justify-center relative z-10 text-center lg:text-left w-full lg:w-auto">
              <p className="font-bold bg-custom-blue text-white py-2 px-4 rounded-full inline-block mb-4 mt-2">{jugador?.nickname}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquiposPage;
