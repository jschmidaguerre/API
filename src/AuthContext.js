import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Función para cargar contratos del usuario logueado
    const fetchContracts = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3000/contracts/user/${userId}`);
            const contractsData = await response.json();
            return contractsData;  // Devuelve los datos para ser usados en otra parte
        } catch (error) {
            console.error('Error fetching contracts:', error);
            return [];  // Devuelve un arreglo vacío en caso de error
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            fetchContracts(userData._id).then(contracts => {
                setUser(prevState => ({ ...prevState, contracts }));
            });
        }
    }, []);

    const login = async (userData) => {
        const user = userData.user;  // Asegúrate de acceder a la propiedad correcta
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        const contracts = await fetchContracts(user._id);
        setUser(prevState => ({ ...prevState, contracts }));  // Actualiza el estado del usuario con los contratos
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};