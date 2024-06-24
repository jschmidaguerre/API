import { useState } from 'react';
import Button from './Button';

function SelectService({ onClose }) {
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleFrequencySelect = (frequency) => {
    setSelectedFrequency(frequency);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-center">Elige tu servicio</h2>
          <button onClick={onClose} className="text-xl font-semibold">&times;</button>
        </div>
        <hr className="my-2 border-t border-blue-100" />
        <div className="flex flex-col gap-2">
          <button className="btn bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100">🏠 Hospedaje de mascota</button>
          <button className="btn bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100">👋 Cuidado de mascota</button>
          <button className="btn bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100">🧒 Guardería de mascota</button>
          <button className="btn bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100">🏠 Visitas a casa</button>
          <button className="btn bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100">🐕 Paseos de perros</button>
          <button className="btn bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-100">🎓 Entrenamiento de perros</button>
        </div>
        <h3 className="mt-4 mb-2 font-bold">¿Qué tan seguido lo necesitas?</h3>
        <div className="flex gap-4">
        <button 
            className={`bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 ${selectedFrequency === 'single' ? 'bg-gray-300 text-black' : ''}`}
            onClick={() => handleFrequencySelect('single')}>
            Único
        </button>
        <button 
            className={`bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 ${selectedFrequency === 'weekly' ? 'bg-gray-300 text-black' : ''}`}
            onClick={() => handleFrequencySelect('weekly')}>
            Repetir semanalmente
        </button>
        </div>
        <hr className="my-2 border-t border-blue-100" />
        <div class="flex justify-center">
        <button type="submit" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Hecho
            </button>

        </div>
      </div>
    </div>
  );
}

export default SelectService;