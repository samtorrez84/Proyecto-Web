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

const PlayerDetailsDisplay = ({ playerName, teamName, url_foto, position, details, className }) => {
    const teamLogo = teamLogos[teamName] || '';
    const positionIcon = positionIcons[position] || '';

    return (
        <div className={`bg-custom-blue max-w-xs rounded-lg overflow-hidden shadow-lg mx-auto ${className}`}>
            <div className="relative">
                {positionIcon && (
                    <img
                        src={positionIcon}
                        alt={`Position Icon ${position}`}
                        className="absolute top-1 left-1 w-7 h-7 bg-contain bg-no-repeat"
                    />
                )}
                <div className="flex items-center justify-center p-4">
                    <div className="w-2/5">
                        <img src={url_foto} alt={`Player ${playerName}`} className="w-full h-full rounded-xl" />
                    </div>
                    <div className="w-2/5 ml-4">
                        <h3 className="text-xl font-bold">{playerName}</h3>
                        <p className="text-sm">{details}</p>
                    </div>
                    {teamLogo && (
                        <div className="w-1/3 ml-4">
                            <img src={teamLogo} alt={`Team Logo ${teamName}`} className="w-full h-full rounded-xl" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlayerDetailsDisplay;
