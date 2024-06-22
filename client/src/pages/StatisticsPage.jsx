import React from 'react';
import PlayerDetailsDisplay from '../components/PlayerDetailsDisplay';
import pan from '../assets/images/players/pan.webp';
import josedeodo from '../assets/images/players/josedeodo.webp';
import lynoz from '../assets/images/players/lynoz.webp';
import Tabla from '../components/Tabla';
import kaze from '../assets/images/players/kaze.webp';

const StatisticsPage = () => {
    const datosEjemplo1 = [
        { ranking: 1, jugador: 'Kaze', mvp: 7, kda: 6.5, url_foto: kaze, position: 'mid', team: 'Isurus'},
        { ranking: 2, jugador: 'PAN', mvp: 6, kda: 7.4,  url_foto: pan, position: 'top', team: 'Isurus'},
        { ranking: 3, jugador: 'Josedeodo', mvp: 5, kda: 5.2, url_foto: josedeodo, position: 'jungle', team: 'Estrál'},
        { ranking: 4, jugador: 'Lynoz', mvp: 4, kda: 4.8, url_foto: lynoz, position: 'support', team: 'Raibow7'},
      ];
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around space-y-4 md:space-y-0">
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
                <div className="mt-8 md:mt-0">
                    <PlayerDetailsDisplay 
                        playerName="LYNOZ"
                        teamName="Raibow7"
                        imageURL={lynoz}
                        position="support"
                        details="Mayor KP: 72%"
                    />
                </div>
            </div>
            <Tabla datos={datosEjemplo1} />
        </div>
    );
};

export default StatisticsPage;
