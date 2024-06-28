// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        const user = userData.user;  // Asegúrate de acceder a la propiedad correcta
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        console.log("User logged in:", user);  // Log de los datos del usuario al iniciar sesión
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        console.log("User logged out");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};