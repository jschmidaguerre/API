import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

const ContractsList = () => {
  const { user } = useAuth();
  const [contracts, setContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContracts = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/contracts/user/${user._id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contractsData = await response.json();
        setContracts(contractsData);
      } catch (error) {
        console.error('Error fetching contracts:', error);
        setError(`Failed to fetch contracts: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContracts();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!contracts.length) {
    return <div>No hay contratos disponibles.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Mis Contratos</h2>
      {contracts.map((contract) => (
        <div key={contract._id} className="w-2/3 border border-blue-100 p-4 mb-2 rounded shadow-sm">
          <p><strong>Estado:</strong> {contract.status}</p>
          <p><strong>Mensaje:</strong> {contract.message}</p>
          <p><strong>Teléfono de Contacto:</strong> {contract.contactPhone}</p>
          <p><strong>Mensaje:</strong> {contract.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ContractsList;