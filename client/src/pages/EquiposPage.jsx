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
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start py-10">
        <div className="md:mr-16">
          <PlayOffs />
        </div>
        <div className='py-6 flex flex-col justify-center items-center relative'>
          <div className="bg-custom-green text-black font-bold py-2 px-4 rounded-full inline-block mb-4 w-full text-center">MVP</div>
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
          <div className="flex flex-col items-center justify-center relative z-10 text-center">
            <p className="font-bold bg-custom-blue text-white py-2 px-4 rounded-full inline-block mb-4 mt-2">Pan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquiposPage;
