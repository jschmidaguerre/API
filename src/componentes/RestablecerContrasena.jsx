import React from 'react';

const RestablecerContrasena = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg border border-blue-100" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Restablecer contraseña</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Nueva contraseña:</label>
                    <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mt-4 flex justify-center">
                    <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reestablecer Contraseña
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestablecerContrasena;