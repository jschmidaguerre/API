import { NavLink } from "react-router-dom";

const NavLinks = () => {

    const isLoggedIn = false; // Variable que indica si el usuario está iniciado sesión
    const nombre = 'Juanse';
    return (
        <div className="flex justify-around items-center gap-2">
            <NavLink to="/conviertete-en-sitter" 
            className={
                "p-2 bg-blue-300  hover:bg-blue-500 rounded-lg border-2 hover:border-black" 
                }>
            Conviertete en Sitter
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/crear-cuenta" className={"self-center"}>Crear Cuenta</NavLink>
            <NavLink to="/ayuda">Ayuda</NavLink>
            <nav className="flex items-center justify-between hover:underline">
                {isLoggedIn && (
                    <NavLink to="/mi-perfil" className="text-gray-800">
                    Hola, {nombre}
                    </NavLink>
                )}   
                {isLoggedIn && (
                    <img src="images/usuario.png" alt="usuario" className="w-8 pl-2"/>
                )}
            </nav>
        </div>
        
    );
}

const Nav = () => {
    return (
        <nav className="text-center w-full flex-[0_0_30%] gap-4 items-center mx-4 my-2">
                <NavLinks/>
        </nav>
    )
}



export default Nav;