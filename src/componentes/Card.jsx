import React from 'react';
import Button from './Button'; // Asegúrate de que el componente Button está correctamente importado.

const Card = ({ nombre, categoria, duracion, costo, descripcion, estrellas, imagen }) => {
    // Función para generar las estrellas de calificación
    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < estrellas; i++) {
            stars.push(<span key={i} className="text-yellow-500">★</span>);
        }
        return stars;
    };

    return (
        <div className="bg-gray-100 rounded p-4 m-4">
            <img src={imagen} alt={nombre} className="rounded-t" />
            <div className="text-center my-2">
                <div className="text-yellow-500 text-lg">{renderStars()}</div>
                <h2 className="text-xl font-bold">{nombre}</h2>
                <Button text="Contratar" />
            </div>
            <div>
                <p><strong>Categoria:</strong> {categoria}</p>
                <p><strong>Duración:</strong> {duracion}</p>
                <p><strong>Costo:</strong> ${costo}</p>
                <p><strong>Descripción:</strong> {descripcion}</p>
            </div>
        </div>
    );
};

export default Card;