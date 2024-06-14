import React from 'react';

const HeroBanner = () => {
    return (
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
            <img src="/images/herobanner.png" alt="LOGO" className="w-full h-full object-cover"/>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="text-center text-white p-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Bienvenido a Nuestro Sitio</h1>
                    <p className="text-xl md:text-2xl mt-4">Explora nuestros servicios y productos</p>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;