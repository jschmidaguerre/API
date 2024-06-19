import React, { useState } from 'react';


const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
            <div className="flex-[0_0_30%] w-full justify-around py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base">
                <input 
                    type="text"
                    className='w-11/12'
                    placeholder="Buscar por localidad..."
                    value={inputValue}
                    onChange={handleInputChange}

                />

                <button>
                    <img src="images/lupa.png" alt="lupa" className='w-4'/>
                </button>
            </div>

        
    );
};

export default SearchBar;
// absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"