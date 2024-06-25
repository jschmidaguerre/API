import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/pets')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPets(data.pets);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching pets:', error);
        setError(error.toString());
        setPets([]);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setPets(pets.filter(pet => pet._id !== id));
  };

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">Error loading pets: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pets.map((pet) => (
          <PetCard
            key={pet._id}
            id={pet._id}
            name={pet.name}
            petType={pet.type}
            gender={pet.gender}
            neutered={pet.neutered}
            age={pet.age}
            weight={pet.weight}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPets;