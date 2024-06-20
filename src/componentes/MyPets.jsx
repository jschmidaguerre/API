import React from 'react';
import PetCard from './PetCard';

const MyPets = ({ pets }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pets.map((pet, index) => (
          <PetCard
            key={index}
            name={pet.name}
            petType={pet.petType}
            breed={pet.breed}
            gender={pet.gender}
            neutered={pet.neutered}
            age={pet.age}
            weight={pet.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPets;