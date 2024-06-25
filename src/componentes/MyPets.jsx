import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';

const MyPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/pets')
            .then(response => response.json())
            .then(data => setPets(data))
            .catch(error => console.error('Error fetching pets:', error));
    }, []);

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