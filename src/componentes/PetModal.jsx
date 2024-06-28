// PetModal.js
import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Verifica que la ruta es correcta

const PetModal = ({ onClose, onSubmit }) => {
  const { user } = useAuth(); // Acceso al contexto de autenticación para obtener el ID del usuario
  const [weight, setWeight] = useState('');

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && !isNaN(value))) {
      setWeight(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      gender: formData.get('gender'),
      neutered: formData.get('neutered'),
      age: parseInt(formData.get('age'), 10),
      weight: parseFloat(formData.get('weight')),
      type: formData.get('type'),
      ownerId: user._id // Añadir el ID del usuario
    };

    fetch('http://localhost:3000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      onSubmit();  // Llamar al prop onSubmit para refrescar los datos u otras acciones
      onClose();   // Cerrar el modal después de una sumisión exitosa
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg border border-blue-100 p-6 w-full max-w-md relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Información de la Mascota</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre:</label>
            <input 
              type="text" 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
              name="name" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tipo de mascota:</label>
            <select 
              name="type" 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Selecciona el tipo de mascota</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Género:</label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Masculino" 
                  className="form-radio" 
                  required 
                />
                <span className="ml-2">Masculino</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Femenino" 
                  className="form-radio" 
                  required 
                />
                <span className="ml-2">Femenino</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">¿Está castrado?</label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="neutered" 
                  value="Sí" 
                  className="form-radio" 
                  required 
                />
                <span className="ml-2">Sí</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input 
                  type="radio" 
                  name="neutered" 
                  value="No" 
                  className="form-radio" 
                  required 
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Meses de vida:</label>
            <input 
              type="number" 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
              name="age" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Peso:</label>
            <input 
              type="number" 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
              name="weight" 
              value={weight}
              onChange={handleWeightChange}
              required 
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Hecho
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetModal;