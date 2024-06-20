import React from 'react';
import ReservationCard from './ReservationCard';

const MyReservations = ({ reservations }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reservations.map((reservation, index) => (
          <ReservationCard
            key={index}
            photo={reservation.photo}
            name={reservation.name}
            serviceType={reservation.serviceType}
            date={reservation.date}
            cost={reservation.cost}
            status={reservation.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReservations;