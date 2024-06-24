import React from 'react';

const ModalContratar = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log("Formulario enviado");
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg space-y-4 border-2 border-blue-100 max-w-md w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Contratar</h2>
                    <button type="button" onClick={onClose} className="rounded-full">
                        <svg className="h-6 w-6 text-gray-700 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-1 bg-blue-100"></div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu mail aquí" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" name="nombre" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu nombre aquí" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Apellido</label>
                    <input type="text" name="apellido" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu apellido aquí" />
                </div>
                <div className="flex items-center gap-2">
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <span className="px-3 py-2 bg-gray-100 border border-blue-100 rounded-md">+54</span>
                    <input type="text" name="telefono" className="flex-1 px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mensaje al proveedor</label>
                    <textarea name="mensaje" className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="3"></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Contratar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalContratar;