import { NavLink } from "react-router-dom";

const NavLinks = () => {
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