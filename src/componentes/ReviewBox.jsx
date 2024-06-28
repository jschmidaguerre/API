import React from 'react';

// Componente para las estrellas de calificación
const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= value ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

const ReviewBox = ({ name, date, image, rating, comment }) => {
  return (
    

    <div className="bg-blue-100 rounded-xl p-4 shadow-lg max-w-sm m-10">
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full object-cover" src={image} alt={name} />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{date}</div>
        </div>
      </div>
      <div className="mt-4">
            <Rating value={rating} />
      </div>
      <div className="mt-2 text-gray-800">{comment}</div>
    </div>
    
  );
};

export default ReviewBox;