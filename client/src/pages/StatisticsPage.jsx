import React, { useEffect, useState } from 'react';
import PlayerDetailsDisplay from '../components/PlayerDetailsDisplay';
import Tabla from '../components/Tabla';
import pan from '../assets/images/players/pan.webp';
import josedeodo from '../assets/images/players/josedeodo.webp';
import lynoz from '../assets/images/players/lynoz.webp';

import { obtenerJugadoresRequest, obtenerJugadorPorNombre } from '../api/jugadores'; // Importa la función correcta para obtener jugadores

const StatisticsPage = () => {
    const [jugadores, setJugadores] = useState([]);
    const [ordenMVPs, setOrdenMVPs] = useState(true); // Estado para controlar la ordenación por MVPs
    const [ordenKDA, setOrdenKDA] = useState(false); // Estado para controlar la ordenación por KDA
    useEffect(() => {
        const fetchJugadores = async () => {
            try {
                const response = await obtenerJugadoresRequest(); // Llama a la función correcta para obtener jugadores
                let jugadoresData = response.data;

                // Ordenar jugadores por número de MVPs (de mayor a menor) inicialmente
                jugadoresData.sort((a, b) => b.estadisticas.mvps - a.estadisticas.mvps);

                setJugadores(jugadoresData); // Actualiza el estado con los datos de los jugadores ordenados
            } catch (error) {
                console.error('Error al obtener los jugadores:', error);
            }
        };

        fetchJugadores();
    }, []);

    useEffect(() => {
        const fetchJugador = async () => {
            try {
                const response = await obtenerJugadorPorNombre('Pan'); // Llama a la función correcta para obtener un jugador por nombre
                console.log('Jugador:', response.data);
            } catch (error) {
                console.error('Error al obtener el jugador:', error);
            }
        };

        fetchJugador();
    }, []);

    // Función para cambiar el orden por MVPs
    const toggleOrdenMVPs = () => {
        const nuevoOrden = !ordenMVPs;
        setOrdenMVPs(nuevoOrden);

        // Ordenar jugadores por MVPs
        const jugadoresOrdenados = [...jugadores];
        jugadoresOrdenados.sort((a, b) => (nuevoOrden ? b.estadisticas.mvps - a.estadisticas.mvps : a.estadisticas.mvps - b.estadisticas.mvps));

        setJugadores(jugadoresOrdenados);
    };

    // Función para cambiar el orden por KDA
    const toggleOrdenKDA = () => {
        const nuevoOrden = !ordenKDA;
        setOrdenKDA(nuevoOrden);

        // Ordenar jugadores por KDA
        const jugadoresOrdenados = [...jugadores];
        jugadoresOrdenados.sort((a, b) => (nuevoOrden ? b.estadisticas.kda - a.estadisticas.kda : a.estadisticas.kda - b.estadisticas.kda));

        setJugadores(jugadoresOrdenados);
    };
    
    
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
            <div className="flex justify-center space-x-4 mb-4 py-4 mt-8">
                <button
                    className={`px-6 py-3 rounded-full font-bold text-black transition-colors duration-300 ease-in-out transform hover:scale-105 ${
                    ordenMVPs ? 'bg-custom-green hover:bg-custom-pink hover:text-white ' : 'bg-custom-green hover:bg-custom-pink hover:text-white '
                    }`}
                    onClick={toggleOrdenMVPs}
                >
                    Ordenar por MVPs
                </button>
                <button
                    className={`px-6 py-3 rounded-full font-bold text-black transition-colors duration-300 ease-in-out transform hover:scale-105 ${
                    ordenKDA ? 'bg-custom-green hover:bg-custom-pink hover:text-white ' : 'bg-custom-green hover:bg-custom-pink hover:text-white '
                    }`}
                    onClick={toggleOrdenKDA}
                >
                    Ordenar por KDA
                </button>
            </div>

            <Tabla datos={jugadores.map((jugador, index) => ({
                ranking: index + 1, // Ranking según el orden de la lista
                jugador: jugador.nickname.toUpperCase(), // Nombre del jugador
                mvp: jugador.estadisticas.mvps, // Número de MVPs del jugador
                kda: jugador.estadisticas.kda, // Valor KDA del jugador
                url_foto: jugador.url_foto, // URL de la foto del jugador
                position: jugador.posicion, // Posición del jugador
                team: jugador.equipo.nombre, // Nombre del equipo del jugador
                url_team: jugador.equipo.url_logo // URL del logo del equipo del jugador
            }))} />
        </div>
    );
};

export default StatisticsPage;
