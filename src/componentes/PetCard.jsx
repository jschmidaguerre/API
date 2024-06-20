import React from 'react';

const PetCard = ({ name, petType, breed, gender, neutered, age, weight }) => {
  return (
    <div className="border border-blue-100 rounded-lg p-4 shadow-lg max-w-sm border-2 bg-gray-100">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{petType}</p>
      <div className="mt-4">
        <p className="text-gray-600"><span className="font-semibold">Raza:</span> {breed}</p>
        <p className="text-gray-600"><span className="font-semibold">Sexo:</span> {gender}</p>
        <p className="text-gray-600"><span className="font-semibold">Castrado:</span> {neutered ? 'Sí' : 'No'}</p>
        <p className="text-gray-600"><span className="font-semibold">Edad:</span> {age}</p>
        <p className="text-gray-600"><span className="font-semibold">Peso:</span> {weight}</p>
      </div>
    </div>
  );
};

export default PetCard;