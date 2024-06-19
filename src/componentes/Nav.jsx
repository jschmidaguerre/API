import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="flex justify-around items-center gap-2">
            <NavLink to="/conviertete-en-sitter" className={"p-4 bg-gray-200 border-gray-400 hover:bg-gray-300"}>Conviertete en Sitter</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/crear-cuenta" className={"self-center"}>Crear Cuenta</NavLink>
            <NavLink to="/ayuda">Ayuda</NavLink>
        </div>
        
    );
}

const Nav = () => {
    return (
        <nav className="text-center w-full flex-[0_0_30%] gap-4 items-center mr-4">
                <NavLinks/>
        </nav>
    )
}



export default Nav;