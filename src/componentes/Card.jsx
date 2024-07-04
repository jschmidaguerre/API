import React, { useState } from 'react';
import ModalContratar from './ModalContratar';
import { useAuth } from '../AuthContext'; // Asegúrate de que esta ruta es correcta en tu proyecto

const Card = ({ nombre, categoria, duracion, costo, descripcion, estrellas, imagen, localidad, serviceId }) => {
    const { user } = useAuth();
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        if (!user) {
            alert("Por favor, inicia sesión para contratar servicios.");
            return;
        }
        if (!serviceId) {
            console.error("Service ID is missing");
            alert("Ocurrió un error al procesar el servicio. Intente de nuevo más tarde.");
            return;
        }
        setModalOpen(!isModalOpen);
    };

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < estrellas; i++) {
            stars.push(<span key={i} className="text-yellow-500">★</span>);
        }
        return <div className="flex justify-center mb-2">{stars}</div>;
    };

    return (
        <div className="m-10 bg-gray-100 rounded-xl p-4 shadow-md w-64">
            <div className="flex justify-center">
                <img src={imagen} alt={`Imagen de ${nombre}`} className="w-24 h-24 object-cover rounded-full" />
            </div>
            <div className="text-center my-4">
                {renderStars()}
                <h2 className="text-md font-semibold mb-2">{nombre}</h2>
                <button
                    className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}
                >
                    Contratar
                </button>
            </div>
            <ul className="text-xs my-2">
                <li><strong>Categoría:</strong> {categoria}</li>
                <li><strong>Duración:</strong> {duracion}</li>
                <li><strong>Costo:</strong> ${costo}</li>
                <li><strong>Localidad:</strong> {localidad}</li>
                <li className="truncate"><strong>Descripción:</strong> {descripcion}</li>
            </ul>
            {isModalOpen && <ModalContratar onClose={toggleModal} serviceId={serviceId} />}
        </div>
    );
};

export default Card;