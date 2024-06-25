import React from 'react';
import PlayerDetailsDisplay from '../components/PlayerDetailsDisplay';
import Tabla from '../components/Tabla';
import { obtenerJugadoresRequest, obtenerJugadorPorNombre } from '../api/jugadores';

const StatisticsPage = () => {
    const [jugadores, setJugadores] = React.useState([]);
    const [ordenMVPs, setOrdenMVPs] = React.useState(true);
    const [ordenKDA, setOrdenKDA] = React.useState(false);

    const [jugadormvp, setJugadormvp] = React.useState(null);
    const [jugadorAsesinato, setJugadorAsesinato] = React.useState(null);
    const [jugadorKP, setJugadorKP] = React.useState(null);

    React.useEffect(() => {
        const fetchJugadores = async () => {
            try {
                const response = await obtenerJugadoresRequest();
                let jugadoresData = response.data;
                jugadoresData.sort((a, b) => b.estadisticas.mvps - a.estadisticas.mvps);
                setJugadores(jugadoresData);
            } catch (error) {
                console.error('Error al obtener los jugadores:', error);
            }
        };

        fetchJugadores();
    }, []);

    React.useEffect(() => {
        const fetchJugador = async () => {
            try {
                const response = await obtenerJugadorPorNombre('Pan');
                setJugadormvp(response.data);
            } catch (error) {
                console.error('Error al obtener el jugador:', error);
            }
        };

        const fetchJugadorAsesinato = async () => {
            try {
                const response = await obtenerJugadorPorNombre('Josedeodo');
                setJugadorAsesinato(response.data);
            } catch (error) {
                console.error('Error al obtener el jugador:', error);
            }
        };

        const fetchJugadorKP = async () => {
            try {
                const response = await obtenerJugadorPorNombre('Lynoz');
                setJugadorKP(response.data);
            } catch (error) {
                console.error('Error al obtener el jugador:', error);
            }
        };

        fetchJugador();
        fetchJugadorAsesinato();
        fetchJugadorKP();
    }, []);

    const toggleOrdenMVPs = () => {
        const nuevoOrden = !ordenMVPs;
        setOrdenMVPs(nuevoOrden);
        const jugadoresOrdenados = [...jugadores];
        jugadoresOrdenados.sort((a, b) => (nuevoOrden ? b.estadisticas.mvps - a.estadisticas.mvps : a.estadisticas.mvps - b.estadisticas.mvps));
        setJugadores(jugadoresOrdenados);
    };

    const toggleOrdenKDA = () => {
        const nuevoOrden = !ordenKDA;
        setOrdenKDA(nuevoOrden);
        const jugadoresOrdenados = [...jugadores];
        jugadoresOrdenados.sort((a, b) => (nuevoOrden ? b.estadisticas.kda - a.estadisticas.kda : a.estadisticas.kda - b.estadisticas.kda));
        setJugadores(jugadoresOrdenados);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:pt-0 flex-wrap gap-y-4">
                <PlayerDetailsDisplay
                    playerName={jugadormvp?.nickname}
                    teamName={jugadormvp?.equipo.nombre}
                    url_foto={jugadormvp?.url_foto}
                    position="top"
                    details="Más MVPs"
                    className="w-full md:w-1/3"
                />
                <PlayerDetailsDisplay
                    playerName={jugadorAsesinato?.nickname}
                    teamName={jugadorAsesinato?.equipo.nombre}
                    url_foto={jugadorAsesinato?.url_foto}
                    position="jungle"
                    details="ASESINATOS: 75"
                    className="w-full md:w-1/3"
                />
                <PlayerDetailsDisplay
                    playerName={jugadorKP?.nickname}
                    teamName={jugadorKP?.equipo.nombre}
                    url_foto={jugadorKP?.url_foto}
                    position="support"
                    details="Mayor KP"
                    className="w-full md:w-1/3"
                />
            </div>
            <div className="flex justify-center space-x-4 mb-4 py-4 mt-8">
                <button
                    className={`px-6 py-3 rounded-full font-bold text-black transition-colors duration-300 ease-in-out transform hover:scale-105 ${
                        ordenMVPs ? 'bg-custom-green hover:bg-custom-pink hover:text-white' : 'bg-custom-green hover:bg-custom-pink hover:text-white'
                    }`}
                    onClick={toggleOrdenMVPs}
                >
                    Ordenar por MVPs
                </button>
                <button
                    className={`px-6 py-3 rounded-full font-bold text-black transition-colors duration-300 ease-in-out transform hover:scale-105 ${
                        ordenKDA ? 'bg-custom-green hover:bg-custom-pink hover:text-white' : 'bg-custom-green hover:bg-custom-pink hover:text-white'
                    }`}
                    onClick={toggleOrdenKDA}
                >
                    Ordenar por KDA
                </button>
            </div>
            <Tabla
                datos={jugadores.map((jugador, index) => ({
                    ranking: index + 1,
                    jugador: jugador.nickname.toUpperCase(),
                    mvp: jugador.estadisticas.mvps,
                    kda: jugador.estadisticas.kda,
                    url_foto: jugador.url_foto,
                    position: jugador.posicion,
                    team: jugador.equipo.nombre,
                    url_team: jugador.equipo.url_logo
                }))}
            />
        </div>
    );
};

export default StatisticsPage;
