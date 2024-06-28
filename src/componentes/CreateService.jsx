import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Verifica que la ruta sea correcta

const barrios = [
    'Palermo', 'Recoleta', 'Belgrano', 'Almagro', 'Caballito',
    'San Telmo', 'Villa Urquiza', 'Retiro', 'Puerto Madero', 'Flores'
];

const CreateService = ({ onClose }) => {
    const { user } = useAuth(); // Obtener el usuario logueado desde el contexto
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        frequency: '',
        fromDate: '',
        toDate: '',
        cost: '',
        serviceType: '',
        description: '',
        image: '/images/elon.png',
        localidad: '', // Agregando el campo localidad al estado inicial
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData, owner: user._id }; // Añadir el ID del usuario al formulario
        fetch('http://localhost:3000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            onClose(); // Cerrar el modal después de crear el servicio exitosamente
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white border-2 border-blue-100 rounded-lg p-6 w-full max-w-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4">Crear Servicio</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Nombre y Apellido:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Categoría:</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded w-full"
                            >
                                <option value="">Selecciona una categoría</option>
                                <option value="Perro">Perro</option>
                                <option value="Gato">Gato</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Frecuencia:</label>
                            <select
                                name="frequency"
                                value={formData.frequency}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded w-full"
                            >
                                <option value="">Selecciona una frecuencia</option>
                                <option value="Diario">Diario</option>
                                <option value="Semanal">Semanal</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">De:</label>
                            <input
                                type="date"
                                name="fromDate"
                                value={formData.fromDate}
                                onChange={(e) => handleDateChange(e, 'fromDate')}
                                className="mt-1 p-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Hasta:</label>
                            <input
                                type="date"
                                name="toDate"
                                value={formData.toDate}
                                onChange={(e) => handleDateChange(e, 'toDate')}
                                className="mt-1 p-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Costo:</label>
                            <input
                                type="number"
                                name="cost"
                                value={formData.cost}
                                onChange={handleChange}
                                min="0"
                                className="mt-1 p-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Tipo de Servicio:</label>
                            <select
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded w-full"
                            >
                                <option value="">Selecciona un tipo de servicio</option>
                                <option value="Hospedaje">Hospedaje</option>
                                <option value="Guardería">Guardería</option>
                                <option value="Visitas">Visitas</option>
                                <option value="Paseo">Paseo</option>
                                <option value="Entrenamiento">Entrenamiento</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Localidad:</label>
                            <select
                                name="localidad"
                                value={formData.localidad}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded w-full"
                            >
                                <option value="">Selecciona una localidad</option>
                                {barrios.map(barrio => (
                                    <option key={barrio} value={barrio}>{barrio}</option>
                                ))}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700">Descripción:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded w-full"
                                rows="4"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateService;