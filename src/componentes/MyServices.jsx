import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext'; // Verifica que la ruta sea correcta

const MyServices = () => {
    const { user } = useAuth(); // Obtener el usuario logueado desde el contexto
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Inicializar la carga solo si el usuario está correctamente definido
        if (user && user._id) {
            fetchServices(user._id);
        } else {
            setIsLoading(false); // Si no hay usuario, no cargar servicios
        }
    }, [user]);

    const fetchServices = (userId) => {
        console.log("Fetching services for user ID:", userId); // Esto te ayudará a verificar que el ID es correcto
        setIsLoading(true);
        fetch(`http://localhost:3000/services?ownerId=${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setServices(data.services || []);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setError(error.toString());
                setIsLoading(false);
            });
    };

    const handleDelete = (id) => {
        setIsLoading(true); // Mostrar estado de carga durante el proceso de eliminación
        fetch(`http://localhost:3000/services/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setServices(services.filter(service => service._id !== id));
        })
        .catch(error => {
            console.error('Error deleting service:', error);
            setError(error.toString());
        })
        .finally(() => setIsLoading(false)); // Restablecer el estado de carga
    };

    if (isLoading) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    if (error) {
        return <div className="container mx-auto p-4">Error loading services: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Mis Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service._id} className="relative border border-blue-100 rounded-lg p-4 shadow-lg bg-white">
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-gray-700"><strong>Tipo de Servicio:</strong> {service.serviceType}</p>
                        <p className="text-gray-700"><strong>Categoría:</strong> {service.category}</p>
                        <p className="text-gray-700"><strong>Frecuencia:</strong> {service.frequency}</p>
                        <p className="text-gray-700"><strong>Desde:</strong> {new Date(service.fromDate).toLocaleDateString()}</p>
                        <p className="text-gray-700"><strong>Hasta:</strong> {new Date(service.toDate).toLocaleDateString()}</p>
                        <p className="text-gray-700"><strong>Costo:</strong> ${service.cost}</p>
                        <p className="text-gray-700"><strong>Localidad:</strong> {service.localidad}</p>
                        <p className="text-gray-700"><strong>Descripción:</strong> {service.description}</p>
                        {service.image && <img src={service.image} alt={service.name} className="w-full h-32 object-cover mt-2 rounded-lg" />}
                        <button onClick={() => handleDelete(service._id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyServices;