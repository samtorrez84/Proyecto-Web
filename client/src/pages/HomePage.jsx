import React from 'react';
import Header from '../components/Header';
import PlayOffs from '../components/PlayOffs';
import PlayerDisplay from '../components/PlayerDisplay';
import pan from '../assets/images/players/pan.webp';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start py-10">
        <div className="md:mr-16">
          <PlayOffs />
        </div>
        <div className='py-6 flex flex-col justify-center items-center relative'>
          <div className="bg-green-500 text-black font-bold py-2 px-4 rounded-full inline-block mb-4 w-full text-center">MVP</div>
            <PlayerDisplay
              playerName="pan"
              teamName="Isurus"
              imageUrl={pan}
              position="jungle"
            />
            <div className="flex flex-col items-center justify-center relative z-10 text-center">
              <p className="font-bold bg-[#BCBEFA] text-black py-2 px-4 rounded-full inline-block mb-4 mt-2">Pan</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
