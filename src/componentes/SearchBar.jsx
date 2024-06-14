import React, { useState } from 'react';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="relative w-full">
            <input 
                type="text"
                className="w-full pl-4 pr-10 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                placeholder="Buscar sitter..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 4.476l4.817 4.817a1 1 0 011.414-1.414l-4.817-4.817A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;