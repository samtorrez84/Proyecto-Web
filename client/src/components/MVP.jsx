import React from 'react';

const MVP = () => {
  return (
    <div className="text-white py-6 flex justify-center items-center">
      <div className="text-center">
        <div className="bg-green-500 text-black font-bold py-2 px-4 rounded-full inline-block mb-4">MVP</div>
        <div className="flex items-center justify-center">
          <img src="src/assets/images/players/pan.webp" alt="MVP Player" className="w-24 h-24 rounded-full" />
          <div className="ml-4">
            <p className="text-xl font-bold">pan</p>
            <p className="text-sm">Team Isurus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVP;
