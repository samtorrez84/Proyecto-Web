import React from 'react';
import Matchup from './Matchup'; // Ajusta la ruta según donde esté tu componente
import estral from '../assets/images/equipos/estral.png';
import leviatan from '../assets/images/equipos/leviatan.png';
import isurus from '../assets/images/equipos/Isurus.png';
import all_knights from '../assets/images/equipos/all_knights.png';
import six_karma from '../assets/images/equipos/sixkarma.png';
import raibow7 from '../assets/images/equipos/raibow7.png';

const PlayOffs = () => {
  return (
    <div className="text-white py-6">
      <div className="container mx-auto text-center">
        {/* Muestra como lista en dispositivos móviles */}
        <div className="sm:hidden">
          <div className="mb-4">
            <div className="bg-custom-pink rounded-full py-2 px-4 text-black font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="ESTRAL" team2="LEVIATÁN" image1={estral} image2={leviatan} />
          </div>
          <div className="mb-4">
            <div className="bg-custom-pink rounded-full py-2 px-4 text-black font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="ISURUS" team2="RAIBOW 7" image1={isurus} image2={raibow7} />
          </div>
          <div>
            <div className="bg-custom-pink rounded-full py-2 px-4 text-black font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="SIX KARMA" team2="ALL KNIGHTS" image1={six_karma} image2={all_knights} />
          </div>
        </div>

        {/* Muestra como divs en pantallas más grandes */}
        <div className="hidden sm:flex justify-center">
          <div className="max-w-md mx-4">
            <div className="bg-custom-pink rounded-full py-2 px-4 text-white font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="ESTRAL" team2="LEVIATÁN" image1={estral} image2={leviatan} />
          </div>
          <div className="max-w-md mx-4">
            <div className="bg-custom-pink rounded-full py-2 px-4 text-white font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="ISURUS" team2="RAIBOW 7" image1={isurus} image2={raibow7} />
          </div>
          <div className="max-w-md mx-4">
            <div className="bg-custom-pink rounded-full py-2 px-4 text-white font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="SIX KARMA" team2="ALL KNIGHTS" image1={six_karma} image2={all_knights} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayOffs;
