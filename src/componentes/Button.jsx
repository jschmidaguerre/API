import React from 'react';

// Componente Button que recibe la prop 'text'
const Button = ({ text }) => {
    return (
        <button className="w-32 h-12 bg-blue-200 text-black rounded-full transition duration-150 ease-in-out hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-md transform hover:-translate-y-1 active:translate-y-0.5">
            {text}
        </button>
    );
};

export default Button;