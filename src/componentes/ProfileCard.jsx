import React, { useState } from 'react';

const ProfileCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        photo: 'images/elon.png', // Placeholder image URL
        name: 'John Doe',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
                <img
                    className="w-32 h-32 rounded-full mb-4"
                    src={profileData.photo}
                    alt="Profile"
                />
                {isEditing ? (
                    <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full mb-4"
                    />
                ) : (
                    <h2 className="text-xl font-bold mb-2">{profileData.name}</h2>
                )}
                {isEditing ? (
                    <input
                        type="text"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full mb-4"
                    />
                ) : (
                    <p className="text-gray-700 mb-2">Teléfono: {profileData.phone}</p>
                )}
                {isEditing ? (
                    <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full mb-4"
                    />
                ) : (
                    <p className="text-gray-700 mb-2">Domicilio: {profileData.address}</p>
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