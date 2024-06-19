import React, { useState } from 'react';
import Button from './Button'; // Asegúrate de que el componente Button está correctamente importado.

const FilterBar = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    // Función para alternar el calendario
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    // Función para manejar el cambio de fecha
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setShowCalendar(false);
    };

    return (
        <div className="mb-4 flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100">
            <div className="flex flex-col md:flex-row gap-2 mb-4 md:mb-0">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📍 Localidad
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📋 Elige un servicio
                </button>
                <button onClick={toggleCalendar} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📅 Fecha desde
                </button>
                <button onClick={toggleCalendar} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📅 Hasta
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    ➕ Agregar mascota
                </button>
            </div>
            <div className="flex gap-2 m-5">
                <Button text="Buscar" />
                <button className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded-full shadow">Filtrar</button>
            </div>
            {showCalendar && (
                <div className="absolute bg-blue-100 p-4 mt-1 rounded-lg shadow-lg">
                    <input type="date" className="p-2 rounded border" onChange={handleDateChange} value={selectedDate || ''} />
                </div>
            )}
        </div>
    );
};

export default FilterBar;