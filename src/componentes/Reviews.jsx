import React, { useState } from 'react';
import ReviewBox from './ReviewBox'; // Asumiendo que ReviewBox está en el mismo directorio

const Reviews = ({ isOpen, onClose, reviews }) => {
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center z-50"> {/* Añadiendo z-index 50 aquí */}
      <div className="bg-white border-2 border-blue-100 rounded-lg max-w-2xl w-full p-4 overflow-hidden relative">
        {/* Botón de cierre mejorado */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-white font-bold rounded-full text-2xl h-10 w-10 flex items-center justify-center"
          aria-label="Cerrar"
          style={{ cursor: 'pointer', outline: 'none' }}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-center mb-2">Reseñas</h2>
        <div className="h-px bg-blue-100 mb-4"></div>
        <div className="overflow-auto max-h-96">
          {reviews.map((review, index) => (
            <ReviewBox key={index} {...review} />
          ))}
        </div>
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Escribir reseña"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              console.log("Reseña enviada:", comment); // Aquí puedes agregar la lógica para manejar el envío del comentario
              setComment(''); // Limpiar el campo después de enviar
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;