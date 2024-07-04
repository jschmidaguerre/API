import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { FilterContext } from '../FilterContext';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { filters } = useContext(FilterContext);

    useEffect(() => {
        const fetchServices = async () => {
            setIsLoading(true);
            const query = new URLSearchParams({
                localidad: filters.selectedLocality || '', // Usar 'localidad' que es como está definido en el modelo
                serviceType: filters.selectedService || '', // Asegurarse de usar 'serviceType' y no 'service'
                category: filters.selectedCategory || '',
                fromDate: filters.selectedDate.from || '',
                toDate: filters.selectedDate.to || '',
            }).toString();

            try {
                const response = await fetch(`http://localhost:3000/services?${query}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setServices(data.services || []); // Asegurarse de que siempre tenemos un array
            } catch (error) {
                console.error('Error fetching services:', error);
                setError(`Failed to fetch services: ${error.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchServices();
    }, [filters]); // Dependencia de filtros asegura que se actualiza al cambiar los filtros

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                estrellas={service.stars || 0}
                imagen={service.image || 'default-image-url'}
                localidad={service.localidad}
                serviceId={service._id} // Propagando serviceId a cada Card
            />
            ))}
        </div>
    );
};

export default ServiceList;