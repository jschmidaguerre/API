import React from 'react';

const ProfileBanner = () => {
  const handleClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Aquí puedes agregar la lógica para redirigir o realizar alguna acción específica
  };

  return (
    <div className="bg-blue-100 w-full h-24 flex justify-around items-center">
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => handleClick('Mi perfil')}>👤</button>
        <div className="text-sm mt-2">Mi perfil</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => handleClick('Mis mascotas')}>🐾</button>
        <div className="text-sm mt-2">Mis mascotas</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => handleClick('Mis reservas')}>📅</button>
        <div className="text-sm mt-2">Mis reservas</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => handleClick('Mis reseñas')}>🌟</button>
        <div className="text-sm mt-2">Mis reseñas</div>
      </div>
      <div className="text-center">
        <button className="text-3xl cursor-pointer" onClick={() => handleClick('Mis servicios')}>🛠️</button>
        <div className="text-sm mt-2">Mis servicios</div>
      </div>
    </div>
  );
};

export default ProfileBanner;