const Footer = () => {
    return (
        <div className="">
            <div className="flex justify-center">
            <div className="w-full h-1 bg-blue-100 mt-10 mb-10"></div>
        </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                <div className="py-4">
                    <h5 className="font-bold text-lg mb-2">Contacto</h5>
                    <p>WhatsApp:</p>
                    <span>+5491163981028</span>
                    <p>Email:</p>
                    <span>info@pawcare.com</span>
                </div>
                <div className="py-4">
                    <img src="/images/logo2.png" alt="LOGO" className="mx-auto" />
                </div>
                <div className="py-4">
                    <h5 className="font-bold text-lg mb-2">Más información</h5>
                    <p>Sobre nosotros</p>
                    <p>Ayuda</p>
                    <p>Conviértete en Sitter</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;