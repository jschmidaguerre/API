import React, { useState, useContext } from 'react'; // Add useContext here
import { FilterContext } from '../FilterContext';


const FilterBar = () => {
    const [showCalendar, setShowCalendar] = useState({ from: false, to: false });
    const [selectedDate, setSelectedDate] = useState({ from: null, to: null });
    const [showLocalityMenu, setShowLocalityMenu] = useState(false);
    const [selectedLocality, setSelectedLocality] = useState('');
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [showCategoryMenu, setShowCategoryMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');


    const { setFilters } = useContext(FilterContext); // Usamos setFilters para actualizar el contexto

    const applyFilters = () => {
        setFilters({
            selectedLocality,
            selectedService,
            selectedCategory,
            selectedDate,
        });
    };
    
    const barrios = [
        'Palermo', 'Recoleta', 'Belgrano', 'Almagro', 'Caballito',
        'San Telmo', 'Villa Urquiza', 'Retiro', 'Puerto Madero', 'Flores'
    ];

    const servicios = [
        'Hospedaje', 'Guardería', 'Visitas', 'Paseo', 'Entrenamiento'
    ];

    const categorias = [
        'Perro', 'Gato'
    ];

    // Función para alternar el calendario
    const toggleCalendar = (type) => {
        setShowCalendar((prevState) => ({ ...prevState, [type]: !prevState[type] }));
    };

    // Función para manejar el cambio de fecha
    const handleDateChange = (event, type) => {
        setSelectedDate((prevState) => ({ ...prevState, [type]: event.target.value }));
        setShowCalendar((prevState) => ({ ...prevState, [type]: false }));
    };

    // Función para alternar el menú de localidad
    const toggleLocalityMenu = () => {
        setShowLocalityMenu(!showLocalityMenu);
    };

    // Función para manejar la selección de localidad
    const handleLocalitySelect = (locality) => {
        setSelectedLocality(locality);
        setShowLocalityMenu(false);
    };

    // Función para alternar el menú de servicio
    const toggleServiceMenu = () => {
        setShowServiceMenu(!showServiceMenu);
    };

    // Función para manejar la selección de servicio
    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setShowServiceMenu(false);
    };

    // Función para alternar el menú de categoría
    const toggleCategoryMenu = () => {
        setShowCategoryMenu(!showCategoryMenu);
    };

    // Función para manejar la selección de categoría
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowCategoryMenu(false);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 relative">
            <div className="flex flex-col md:flex-row gap-2 md:mb-0">
                <div className="relative">
                    <button onClick={toggleLocalityMenu} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                        📍 {selectedLocality || 'Localidad'}
                    </button>
                    {showLocalityMenu && (
                        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 z-10">
                            {barrios.map((barrio) => (
                                <div
                                    key={barrio}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleLocalitySelect(barrio)}
                                >
                                    {barrio}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button onClick={toggleServiceMenu} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                        📋 {selectedService || 'Elige un servicio'}
                    </button>
                    {showServiceMenu && (
                        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 z-10">
                            {servicios.map((service) => (
                                <div
                                    key={service}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleServiceSelect(service)}
                                >
                                    {service}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button onClick={() => toggleCalendar('from')} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                        📅 Fecha desde
                    </button>
                    {showCalendar.from && (
                        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 z-10">
                            <input
                                type="date"
                                className="p-2 rounded border"
                                onChange={(event) => handleDateChange(event, 'from')}
                                value={selectedDate.from || ''}
                            />
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button onClick={() => toggleCalendar('to')} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                        📅 Hasta
                    </button>
                    {showCalendar.to && (
                        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 z-10">
                            <input
                                type="date"
                                className="p-2 rounded border"
                                onChange={(event) => handleDateChange(event, 'to')}
                                value={selectedDate.to || ''}
                            />
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button onClick={toggleCategoryMenu} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow">
                        🐾 {selectedCategory || 'Categoría'}
                    </button>
                    {showCategoryMenu && (
                        <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 z-10">
                            {categorias.map((category) => (
                                <div
                                    key={category}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex gap-2 m-5">
                <button class="bg-blue-100 border border-gray-300 text-gray-800 py-2 px-12 rounded-full shadow" onClick={applyFilters}>Buscar</button>
                <button className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded-full shadow">Filtrar</button>
            </div>
        </div>
    );
};

export default FilterBar;