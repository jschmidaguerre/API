import React from 'react';

const PetCard = ({ id, name, petType, gender, neutered, age, weight, onDelete }) => {
    const handleDelete = () => {
        console.log(`Attempting to delete pet with id: ${id}`); // Agregar este log
        fetch(`http://localhost:3000/pets/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          console.log(`Pet with id: ${id} deleted successfully`);
          onDelete(id); // Call onDelete prop to remove the pet from the frontend state
        })
        .catch(error => {
          console.error('Error deleting pet:', error);
        });
      };
  return (
    <div className="relative border border-blue-100 rounded-lg p-4 shadow-lg max-w-sm bg-gray-100">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{petType}</p>
      <div className="mt-4">
        <p className="text-gray-600"><span className="font-semibold">Sexo:</span> {gender}</p>
        <p className="text-gray-600"><span className="font-semibold">Castrado:</span> {neutered ? 'Sí' : 'No'}</p>
        <p className="text-gray-600"><span className="font-semibold">Edad:</span> {age}</p>
        <p className="text-gray-600"><span className="font-semibold">Peso:</span> {weight}</p>
      </div>
      <button onClick={handleDelete} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
        🗑️
      </button>
    </div>
  );
};

export default PetCard;