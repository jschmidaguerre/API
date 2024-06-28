import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext'; // Verifica que la ruta es correcta

const ProfileCard = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        photo: '', // URL de imagen por defecto
        name: '',
        correo: '', // Campo para el correo electrónico
    });

    useEffect(() => {
        if (user) {
            console.log("Updated user data in ProfileCard:", user); // Verifica que los datos son actualizados
            setProfileData({
                photo: user.photo || 'images/elon.png',
                name: user.nombre || 'John Doe',
                phone: user.phone || '123-456-7890',
                correo: user.correo || 'No email provided'
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    if (!user) {
        return <div>Please log in to view profile.</div>;
    }

    return (
        <div className="mt-10 max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
                <img className="w-32 h-32 rounded-full mb-4" src={profileData.photo} alt="Profile" />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded w-full mb-4"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded w-full mb-4"
                        />
                        <input
                            type="email"
                            name="correo"
                            value={profileData.correo}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded w-full mb-4"
                        />
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold mb-2">{profileData.name}</h2>
                        <p className="text-gray-700 mb-2">Teléfono: {profileData.phone}</p>
                        <p className="text-gray-700 mb-2">Correo: {profileData.correo}</p>
                    </>
                )}
                <button
                    onClick={handleEditToggle}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                >
                    {isEditing ? 'Guardar' : 'Editar Perfil'}
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;