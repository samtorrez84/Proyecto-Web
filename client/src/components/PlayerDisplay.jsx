import React from 'react';

import estral from '../assets/images/equipos/estral.png';
import leviatan from '../assets/images/equipos/leviatan.png';
import isurus from '../assets/images/equipos/Isurus.png';
import all_knights from '../assets/images/equipos/all_knights.png';
import six_karma from '../assets/images/equipos/sixkarma.png';
import raibow7 from '../assets/images/equipos/raibow7.png';

const teamLogos = {
  Estrál: estral,
  Leviatan: leviatan,
  Isurus: isurus,
  "All Knights": all_knights,
  "Six Karma": six_karma,
  "Raibow7": raibow7
};

const PlayerDisplay = ({ playerName, teamName, imageUrl, position }) => {
  const teamLogo = teamLogos[teamName] || '';

  return (
    <div className="text-white py-6 flex flex-col justify-center items-center relative">
      <div className="bg-green-500 text-black font-bold py-2 px-4 rounded-full inline-block mb-4">MVP</div>
      <div className="text-center bg-black p-4 rounded-xl relative">
        {teamLogo && (
          <div className="absolute top-2 right-2 w-10 h-10 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${teamLogo})` }}></div>
        )}
        <div className="flex flex-col items-center justify-center relative z-10">
          <img src={imageUrl} alt={`MVP Player ${playerName}`} className="w-24 h-24 rounded-xl mb-4" />
          <div className="text-center">
            <p className="text-xl font-bold">{playerName}</p>
            <p className="text-sm">{teamName}</p>
            <p className="text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDisplay;
