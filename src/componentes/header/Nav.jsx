import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ onLoginClick, onCreateUserClick }) => {
  const isLoggedIn = false; // Variable que indica si el usuario está iniciado sesión
  const nombre = 'Juanse';

  return (
    <nav className="flex justify-around items-center gap-2">
      <button onClick={onCreateUserClick} className="text-blue-500 hover:underline m-5">
        Conviertete en Sitter
      </button>
      <button onClick={onLoginClick} className="text-blue-500 hover:underline m-5">
        Login
      </button>
      <button onClick={onCreateUserClick} className="text-blue-500 hover:underline m-5">
        Crear Cuenta
      </button>
      <button className="text-blue-500 hover:underline m-5">
        Mi perfil
      </button>
      {isLoggedIn && (
        <>
          <NavLink to="/mi-perfil" className="text-gray-800">
            Hola, {nombre}
          </NavLink>
          <img src="images/usuario.png" alt="usuario" className="w-8 pl-2"/>
        </>
      )}
    </nav>
  );
};

export default Nav;