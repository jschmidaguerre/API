import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PerfilCreado = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Solo aparece cuando está en true
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]); // Dependencias para asegurar que el efecto se ejecuta solo cuando cambia isLoggedIn

  if (!isLoggedIn) {
    return null; // Retornar null mientras espera por la condición o redirección
  }

  return (
    <div className="container mx-auto flex w-full justify-evenly">
      <div className="text-side flex flex-col items-center justify-center">
        <img src="images/verificado.png" alt="verificado" className='w-8'/>
        <h1 className='text-3xl my-4'>¡Completado!</h1>
        <p className='m-2'>Tu perfil se ha creado</p>
        <button className="md:m-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-xl ">Buscar Sitter</button>
      </div>
      <div className="image-side">
        <img src="images/perfilCreado.png" alt="Imagen" />
      </div>
    </div>
  );
};

export default PerfilCreado;