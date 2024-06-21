import React from 'react';

const Matchup = ({ team1, team2, image1, image2 }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center mr-4">
        <img src={image1} alt={team1} className="w-20 h-20 rounded-full mb-1" />
        <p className="font-bold">{team1}</p>
      </div>
      <p className="font-bold mx-4">vs</p>
      <div className="text-center ml-4">
        <img src={image2} alt={team2} className="w-20 h-20 rounded-full mb-1" />
        <p className="font-bold">{team2}</p>
      </div>
    </div>
  );
};

export default Matchup;
