import React, { useState, useEffect } from 'react';

const ReservationCard = ({ id, photo, name, serviceType, date, cost, message, userId, status: initialStatus }) => {
  const [status, setStatus] = useState(initialStatus); // Estado inicial basado en props
  const [isVisible, setIsVisible] = useState(true); // Controlar la visibilidad del componente

  useEffect(() => {
    if (status === 'Rechazada') {
      setIsVisible(false); // Hacer el componente invisible si el estado es 'Rechazada'
    }
  }, [status]); // Este efecto se ejecuta cuando 'status' cambia.

  const handleChange = async (event) => {
    const newStatus = event.target.value;
    try {
      const response = await fetch(`http://localhost:3000/api/contracts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });
  
      if (response.ok) {
        setStatus(newStatus);
      } else {
        console.error('Error actualizando el estado de la reserva');
      }
    } catch (error) {
      console.error('Error al comunicarse con el servidor', error);
    }
  };
  if (!isVisible) return null; // No renderizar el componente si no es visible

  // Clase de CSS condicional según el estado
  const cardClassName = `border border-blue-100 rounded-lg p-4 shadow-lg max-w-sm ${
    status === 'Aceptada' ? 'bg-green-100' : 'bg-gray-100'
  }`;

  return (
    <div className={cardClassName}>
      <div className="flex items-center space-x-4">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500">{serviceType}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600"><span className="font-semibold">Estado:</span> {status}</p>
        <p className="text-gray-600"><span className="font-semibold">Mensaje:</span> {message}</p>

        <select value={status} onChange={handleChange} disabled={status === 'Aceptada'} className="mt-2 p-2 rounded-lg bg-blue-50">
          <option value="Pendiente">Pendiente</option>
          <option value="Aceptada">Aceptada</option>
          <option value="Rechazada">Rechazada</option>
        </select>
      </div>
    </div>
  );
};

export default ReservationCard;