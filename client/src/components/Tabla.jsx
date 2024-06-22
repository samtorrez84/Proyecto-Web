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
                <div className="flex items-center">
                  <div className="w-1/3 lg:w-2/5">{dato.jugador}</div> {/* Ancho ajustable */}
                  <div className="ml-2">
                    <PlayerDisplay
                      playerName={dato.jugador}
                      teamName={dato.team}
                      imageUrl={dato.url_foto}
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
