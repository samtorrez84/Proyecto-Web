import React from 'react';
import Header from '../components/Header';
import PlayOffs from '../components/PlayOffs';
import PlayerDisplay from '../components/PlayerDisplay';
import pan from '../assets/images/players/pan.webp';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start py-6">
        <div className="md:mr-16">
          <PlayOffs />
        </div>
        <PlayerDisplay
          playerName="pan"
          teamName="Isurus"
          imageUrl={pan}
          position="Jungle"
        />
      </div>
    </div>
  );
};

export default HomePage;
