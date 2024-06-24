import React from 'react';
import PlayerDisplay from '../components/PlayerDisplay';

const Tabla = ({ datos }) => {
  return (
    <div className="flex justify-center mt-8 mb-8">
      <table className="table-auto w-full lg:w-3/4 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-custom-blue">
            <th className="px-6 py-3 text-left">RANKING</th>
            <th className="px-6 py-3 text-left">JUGADOR</th>
            <th className="px-6 py-3 text-left">MVP</th>
            <th className="px-6 py-3 text-left">KDA</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.ranking} className="bg-custom-dark border-b border-white hover:bg-gray-700 transition-colors duration-300">
              <td className="px-6 py-4 text-center">{dato.ranking}</td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <img src={dato.url_foto} alt={`${dato.jugador} Foto`} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="text-lg font-bold">{dato.jugador}</div>
                    <div className="text-sm text-gray-400">{dato.position}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">{dato.mvp}</td>
              <td className="px-6 py-4 text-center">{dato.kda} KDA</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
