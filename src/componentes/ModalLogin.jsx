import React from 'react';

const ModalLogin = ({ onClose }) => {
    // Asegurarse de detener la propagación del clic dentro del modal para no cerrar por error
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white p-8 rounded-lg max-w-md w-full space-y-4" onClick={handleModalClick}>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Bienvenido a Paw Care</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="tuemail@ejemplo.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="********" />
                </div>
                <div className="text-center text-sm text-blue-500 hover:text-blue-700 cursor-pointer">¿Olvidaste tu contraseña?</div>
                <div className="flex justify-center">
                    <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </div>

                <div className="grid grid-cols-3 items-center">
                    <div className="w-full h-1 bg-blue-100 mt-10 mb-10"></div>
                    <div className="text-center font-medium">O</div>
                    <div className="w-full h-1 bg-blue-100 mt-10 mb-10"></div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Crear cuenta</label>
                    <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="nuevoemail@ejemplo.com" />
                </div>
                <div className="flex justify-center">
                    <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;