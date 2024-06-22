import React from 'react';
import PlayerDetailsDisplay from '../components/PlayerDetailsDisplay';
import pan from '../assets/images/players/pan.webp';
import josedeodo from '../assets/images/players/josedeodo.webp';
import lynoz from '../assets/images/players/lynoz.webp';

const StatisticsPage = () => {
    return (
        <div className="container mx-auto flex flex-row justify-around mt-6">
            <PlayerDetailsDisplay 
                playerName="PAN"
                teamName="Isurus"
                imageURL={pan}
                position="top"
                details="Más MVPS"
            />
            <PlayerDetailsDisplay 
                playerName="JOSEDEODO"
                teamName="Estrál"
                imageURL={josedeodo}
                position="jungle"
                details="ASESINATOS: 75"
            />
            <PlayerDetailsDisplay 
                playerName="LYNOZ"
                teamName="Raibow7"
                imageURL={lynoz}
                position="support"
                details="Mayor KP: 72%"
            />
        </div>
    );
};

export default StatisticsPage;
