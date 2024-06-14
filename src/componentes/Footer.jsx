const Footer = () => {
    return (
        <div className="">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h5 className="font-bold text-lg mb-2">Contacto</h5>
                    <p>WhatsApp:</p>
                    <span>+5491163981028</span>
                    <p>Email:</p>
                    <span>info@pawcare.com</span>
                </div>
                <div>
                    <img src="/images/logo2.png" className="" alt="LOGO"/>
                </div>
                <div>
                    <h5 className="font-bold text-lg mb-2">Más información</h5>
                    <span>Sobre nosotros</span>
                    <span>Ayuda</span>
                    <span>Conviértete en Sitter</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;