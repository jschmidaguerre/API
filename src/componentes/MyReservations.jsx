import React, { useEffect, useState } from 'react';
import ReservationCard from './ReservationCard';
import { useAuth } from '../AuthContext';

const MyReservations = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceivedRequests = async () => {
      if (!user) return;

      try {
        const response = await fetch(`http://localhost:3000/api/contracts/provider/${user._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`, // Asegúrate de enviar el token de autenticación si es necesario
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching received requests:', error);
        setError('Failed to fetch received requests.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReceivedRequests();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!requests.length) {
    return <div>No received requests available.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requests.map((request, index) => (
          <ReservationCard
            key={index}
            photo={request.userId.photo || 'default_photo.jpg'} // Asegúrate de que el campo correcto está siendo usado
            name={request.userId.nombre} // Asumiendo que el nombre del cliente está en 'userId.nombre'
            serviceType={request.serviceId.name}
            date={request.date}
            cost={request.cost}
            status={request.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReservations;