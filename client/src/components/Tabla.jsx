import React from 'react';
import PlayerDisplay from '../components/PlayerDisplay';

const Tabla = ({ datos }) => {
  return (
    <div className="flex justify-center mt-4">
      <table className="table-auto w-full lg:w-3/4">
        <thead>
          <tr>
            <th className="px-4 py-2">RANKING</th>
            <th className="px-4 py-2">JUGADOR</th>
            <th className="px-4 py-2">MVP</th>
            <th className="px-4 py-2">KDA</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.ranking}>
              <td className="border px-4 py-2">{dato.ranking}</td>
              <td className="border px-2 py-2">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">{dato.jugador}</div> {/* Ancho ajustable */}
                  <div className="ml-0 lg:ml-2 mt-2 lg:mt-0">
                    <PlayerDisplay
                      playerName={dato.jugador}
                      url_team={dato.url_team}
                      url_foto={dato.url_foto}
                      position={dato.position}
                    />
                  </div>
                </div>
              </td>
              <td className="border px-4 py-2">{dato.mvp}</td>
              <td className="border px-4 py-2">{dato.kda} kda</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
