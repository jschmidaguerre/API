import React from 'react';
import Button from './Button';

const SitterBanner = () => {
    return (
        <div className="bg-white p-4 mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex justify-center items-center text-center p-4 sm:flex-col">
                    <img src="/images/perro.png" alt="" />
                    <p className="font-bold text-md ">Conviértete en sitter con nosotros!</p>
                </div>
                <div className="flex justify-center items-center text-center p-4">
                    <Button text="Buscar Sitter"/>

                </div>
                <div className="flex justify-center items-center text-center p-4 sm:flex-col">
                    <img src="/images/casa.png" alt="" />
                    <p className="font-bold text-md">El cuidado que tu mascota necesita</p>
                </div>
            </div>
        </div>
    );
};

export default SitterBanner;