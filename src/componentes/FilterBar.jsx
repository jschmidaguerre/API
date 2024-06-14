import React from 'react';
import Button from './Button'; // Asegúrate de que el componente Button está correctamente importado.

const FilterBar = () => {
    return (
        <div className="mb-4 flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100">
            <div className="flex flex-col md:flex-row gap-2 mb-4 md:mb-0">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📍 Localidad
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📋 Elige un servicio
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                    📅 Fecha desde
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
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
        </div>
    );
};

export default FilterBar;