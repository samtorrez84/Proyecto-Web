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

const PlayerDetailsDisplay = ({ playerName, teamName, imageURL, position, details, className }) => {
    const teamLogo = teamLogos[teamName] || '';
    const positionIcon = positionIcons[position] || '';

    const logoStyle = {
        opacity: 0.8,
    };

    return (
        <div className={`relative text-center bg-custom-blue p-4 rounded-xl flex flex-col items-center md:flex-row md:items-start md:justify-between ${className}`}>
            <img src={imageURL} alt={`MVP Player ${playerName}`} className="w-24 h-24 rounded-xl mb-4 md:mb-0 md:mr-4" />
            <div className="text-white flex flex-col justify-center items-center md:items-start">
                <h3 className="text-xl font-bold">{playerName}</h3>
                <p className="text-sm">{details}</p>
            </div>
            {teamLogo && (
                <img src={teamLogo} alt={`Team Logo ${teamName}`} className="w-24 h-24 rounded-xl mt-4 md:mt-0 md:ml-4" style={logoStyle} />
            )}
            {positionIcon && (
                <div className="absolute top-3 left-3 w-7 h-7 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${positionIcon})` }}></div>
            )}
        </div>
    )
}

export default PlayerDetailsDisplay;
