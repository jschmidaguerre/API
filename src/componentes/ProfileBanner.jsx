import React from 'react';

const ProfileBanner = ({ setActiveComponent }) => {
  return (
    <div className="bg-blue-100 w-full h-24 flex justify-around items-center">
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => setActiveComponent('ProfileCard')}>👤</button>
        <div className="text-sm mt-2">Mi perfil</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => setActiveComponent('MyPets')}>🐾</button>
        <div className="text-sm mt-2">Mis mascotas</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => setActiveComponent('MyReservations')}>📅</button>
        <div className="text-sm mt-2">Mis reservas</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => setActiveComponent('MyRequests')}>📜</button>
        <div className="text-sm mt-2">Mis solicitudes</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => setActiveComponent('Reviews')}>🌟</button>
        <div className="text-sm mt-2">Mis reseñas</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => setActiveComponent('MyServices')}>🛠️</button>
        <div className="text-sm mt-2">Mis servicios</div>
      </div>
    </div>
  );
};

export default ProfileBanner;