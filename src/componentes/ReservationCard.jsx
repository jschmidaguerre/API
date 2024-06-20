import React from 'react';

const ReservationCard = ({ photo, name, serviceType, date, cost, status }) => {
  return (
    <div className="border border-blue-100 rounded-lg p-4 shadow-lg max-w-sm bg-gray-100 border-2">
      <div className="flex items-center space-x-4">
        <img src={photo} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500">{serviceType}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600"><span className="font-semibold">Fecha:</span> {date}</p>
        <p className="text-gray-600"><span className="font-semibold">Costo:</span> ${cost}</p>
        <p className={`text-gray-600 ${status === 'Aceptada' ? 'text-green-500' : 'text-red-500'}`}><span className="font-semibold">Estado:</span> {status}</p>
      </div>
    </div>
  );
};

export default ReservationCard;