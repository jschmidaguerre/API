import React from 'react';
import Button from './Button'; // Asegúrate de que el componente Button está correctamente importado.

const Card = ({ nombre, categoria, duracion, costo, descripcion, estrellas, imagen }) => {
    // Función para generar las estrellas de calificación
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
                <img src={imagen} alt={nombre} className="w-24 h-24 object-cover rounded-full" />
            </div>
            <div className="text-center my-4">
                {renderStars()}
                <h2 className="text-md font-semibold mb-2">{nombre}</h2>
                <div class="mt-5 mb-5">

                    <Button text="Contratar" />
                </div>
            </div>
            <ul className="text-xs my-2">
                <li><strong>Categoría:</strong> {categoria}</li>
                <li><strong>Duración:</strong> {duracion}</li>
                <li><strong>Costo:</strong> ${costo}</li>
                <li className="truncate"><strong>Descripción:</strong> {descripcion}</li>
            </ul>
        </div>
    );
};

export default Card;