import React, { useEffect, useState } from 'react';
import Card from './Card';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setServices(data.services);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setError(error.toString());
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {services.map(service => (
                <Card
                    key={service._id}
                    nombre={service.name}
                    categoria={service.category}
                    duracion={`${new Date(service.fromDate).toLocaleDateString()} - ${new Date(service.toDate).toLocaleDateString()}`}
                    costo={service.cost}
                    descripcion={service.description}
                    estrellas={service.stars || 0} // Suponiendo que tienes una propiedad `stars` en tu servicio
                    imagen={service.image || 'default-image-url'} // Suponiendo que tienes una propiedad `image` en tu servicio
                />
            ))}
        </div>
    );
};

export default ServiceList;