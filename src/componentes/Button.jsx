import React from 'react';

// Componente Button que recibe la prop 'text' y 'onClick'
const Button = ({ text, onClick }) => {
    return (
        <button 
            className="w-40 h-12 bg-blue-200 text-black rounded-full transition duration-150 ease-in-out hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:shadow-md transform hover:-translate-y-1 active:translate-y-0.5"
            onClick={onClick} // Pasar el evento onClick
        >
            {text}
        </button>
    );
};

export default Button;