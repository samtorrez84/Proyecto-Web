import React from 'react';

import estral from '../assets/images/equipos/estral.png';
import leviatan from '../assets/images/equipos/leviatan.png';
import isurus from '../assets/images/equipos/Isurus.png';
import all_knights from '../assets/images/equipos/all_knights.png';
import six_karma from '../assets/images/equipos/sixkarma.png';
import raibow7 from '../assets/images/equipos/raibow7.png';

import adcIcon from '../assets/images/positions/adc.png';
import supportIcon from '../assets/images/positions/support.png';
import midIcon from '../assets/images/positions/mid.png';
import topIcon from '../assets/images/positions/top.png';
import jungleIcon from '../assets/images/positions/jungle.png';

const teamLogos = {
  Estrál: estral,
  Leviatan: leviatan,
  Isurus: isurus,
  "All Knights": all_knights,
  "Six Karma": six_karma,
  "Raibow7": raibow7
};

const positionIcons = {
  adc: adcIcon,
  support: supportIcon,
  mid: midIcon,
  top: topIcon,
  jungle: jungleIcon
};

const PlayerDisplay = ({ playerName, teamName, imageUrl, position }) => {
  const teamLogo = teamLogos[teamName] || '';
  const positionIcon = positionIcons[position] || '';

  return (
    <div className="text-center bg-black p-4 rounded-xl relative">
      {teamLogo && (
        <div className="absolute top-2 right-2 w-10 h-10 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${teamLogo})` }}></div>
      )}
      {positionIcon && (
        <div className="absolute top-3 left-3 w-7 h-7 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${positionIcon})` }}></div>
      )}
      <img src={imageUrl} alt={`MVP Player ${playerName}`} className="w-24 h-24 rounded-xl" />
    </div>
  );
};

export default PlayerDisplay;
