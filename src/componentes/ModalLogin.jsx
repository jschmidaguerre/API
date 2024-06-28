import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Verifica que la ruta de importación sea correcta

const ModalLogin = ({ isOpen, onClose }) => {
    const { login } = useAuth(); // Acceso a la función de login del contexto
    const [loginData, setLoginData] = useState({
        correo: '',
        contrasena: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const userData = await response.json();
            console.log("Login data received:", userData);
            login(userData); // Pasa los datos del usuario al contexto para actualizar el estado global
            onClose(); // Cierra el modal en el inicio de sesión exitoso
        } catch (error) {
            console.error('Failed to login:', error);
            setError('Failed to login: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-full max-w-md" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold text-center">Login</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="correo" value={loginData.correo} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="contrasena" value={loginData.contrasena} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ModalLogin;