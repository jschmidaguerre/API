import React, { useState } from 'react';

const PetModal = ({ onClose, onSubmit }) => {
  const [weight, setWeight] = useState('');

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && !isNaN(value))) {
      setWeight(value);
    }
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
        <form onSubmit={onSubmit}>
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
            <input 
              type="text" 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
              name="breed" 
              required 
            />
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