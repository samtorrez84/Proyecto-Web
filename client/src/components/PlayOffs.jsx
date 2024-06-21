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
        <div className="sm:hidden">
          {/* Muestra como lista en dispositivos móviles */}
          <div className="mb-4">
            <div className="bg-pink-500 rounded-full py-2 px-4 text-black font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="ESTRAL" team2="LEVIATÁN" image1={estral} image2={leviatan} />
          </div>
          <div className="mb-4">
            <div className="bg-pink-500 rounded-full py-2 px-4 text-black font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="ISURUS" team2="RAIBOW 7" image1={isurus} image2={raibow7} />
          </div>
          <div>
            <div className="bg-pink-500 rounded-full py-2 px-4 text-black font-bold mb-2">PLAY OFFS</div>
            <Matchup team1="SIX KARMA" team2="ALL KNIGHTS" image1={six_karma} image2={all_knights} />
          </div>
        </div>
        <div className="hidden sm:block">
          {/* Muestra como tabla en pantallas más grandes */}
          <table className="table-auto mx-auto border-separate border-spacing-4">
            <thead>
              <tr>
                <th className="bg-pink-500 rounded-full py-2 px-4 text-black font-bold">PLAY OFFS</th>
                <th className="bg-pink-500 rounded-full py-2 px-4 text-black font-bold mx-4">PLAY OFFS</th>
                <th className="bg-pink-500 rounded-full py-2 px-4 text-black font-bold mx-4">PLAY OFFS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <Matchup team1="ESTRAL" team2="LEVIATÁN" image1={estral} image2={leviatan} />
                </td>
                <td className="px-4 py-2 mx-4">
                  <Matchup team1="ISURUS" team2="RAIBOW 7" image1={isurus} image2={raibow7} />
                </td>
                <td className="px-4 py-2 mx-4">
                  <Matchup team1="SIX KARMA" team2="ALL KNIGHTS" image1={six_karma} image2={all_knights} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayOffs;
