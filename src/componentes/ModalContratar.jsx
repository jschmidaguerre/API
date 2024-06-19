import React from 'react';
import Button from './Button'; // Asegúrate de que este import corresponda al lugar donde tienes tu componente Button

const ModalContratar = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg space-y-4 border-2 border-blue-100 max-w-md w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Contratar</h2>
                    <button onClick={onClose} className="rounded-full">
                        <svg className="h-6 w-6 text-gray-700 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-1 bg-blue-100"></div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu mail aquí" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu nombre aquí" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Apellido</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu apellido aquí" />
                </div>
                <div className="flex items-center gap-2">
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <span className="px-3 py-2 bg-gray-100 border border-blue-100 rounded-md">+54</span>
                    <input type="text" className="flex-1 px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mensaje al proveedor</label>
                    <textarea className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="3"></textarea>
                </div>
                <div className="flex justify-center">
                    <Button text="Contratar" />
                </div>
            </div>
        </div>
    );
};

export default ModalContratar;