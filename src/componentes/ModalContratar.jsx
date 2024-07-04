import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Asegúrate de que esta ruta es correcta en tu proyecto

const ModalContratar = ({ onClose, serviceId }) => {
    const { user } = useAuth(); // Accede al usuario actual desde el contexto
    const [contactEmail, setContactEmail] = useState(user?.email || '');
    const [contactPhone, setContactPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Comprueba que los campos requeridos no estén vacíos
        if (!contactEmail || !contactPhone || !message) {
            alert('Por favor completa todos los campos requeridos.');
            return;
        }
        const contractData = {
            userId: user?._id, // Asegúrate de que el ID del usuario es un ObjectId válido
            serviceId, // ID del servicio seleccionado
            contactPhone, // Teléfono de contacto
            contactEmail, // Email de contacto
            message, // Mensaje al proveedor
            status: 'Solicitada' // El estado inicial del contrato
        };

        try {
            const response = await fetch('http://localhost:3000/contracts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contractData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Contrato creado:', data);
                alert('Contrato creado exitosamente!');
                onClose();  // Cerrar el modal tras enviar los datos
            } else {
                const errorData = await response.json(); // Captura y muestra detalles del error desde el servidor
                throw new Error(errorData.message || 'Failed to create contract');
            }
        } catch (error) {
            console.error('Error al crear el contrato:', error);
            alert('Error al crear el contrato: ' + error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg space-y-4 border-2 border-blue-100 max-w-md w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Contratar Servicio</h2>
                    <button type="button" onClick={onClose} className="rounded-full">
                        <svg className="h-6 w-6 text-gray-700 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-1 bg-blue-100"></div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email de Contacto</label>
                    <input type="email" name="contactEmail" value={contactEmail} onChange={e => setContactEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Teléfono de Contacto</label>
                    <input type="text" name="contactPhone" value={contactPhone} onChange={e => setContactPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mensaje al Proveedor</label>
                    <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-blue-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="3" required></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Contratar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalContratar;