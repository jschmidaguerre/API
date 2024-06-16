import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <NavLink to="/conviertete-en-sitter">Conviertete en Sitter</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/crear-cuenta">Crear Cuenta</NavLink>
            <NavLink to="/ayuda">Ayuda</NavLink>
        </>
        
    );
}

export default Nav;