import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PerfilCreado = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Solo aparece cuando está en true
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login'); 
    return null;
  }

  return (
        <div class="container mx-auto flex w-full justify-evenly">
            <div class="text-side flex flex-col items-center justify-center">
                <img src="images/verificado.png" alt="verificado" className='w-8'/>
                <h1 className='text-3xl my-4'>¡Completado!</h1>
                <p className='m-2'>Tu perfil se ha creado</p>
            <button class="md:m-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-xl ">Buscar Sitter</button>
        </div>
            <div class="image-side">
                <img src="images/perfilCreado.png" alt="Imagen" />
            </div>
        </div>
  );
};

export default PerfilCreado;