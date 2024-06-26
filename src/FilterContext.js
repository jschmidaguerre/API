import React, { createContext, useState, useMemo } from 'react';

// Creación del contexto
export const FilterContext = createContext();

// Proveedor del contexto
export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        selectedLocality: '',
        selectedService: '',
        selectedCategory: '',
        selectedDate: { from: null, to: null }
    });

    // Memoización de los valores para optimización
    const value = useMemo(() => {
        console.log('Actualizando contexto de filtros:', filters); // Registra los cambios cada vez que se actualiza el contexto
        return { filters, setFilters };
    }, [filters]);

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};