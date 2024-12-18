import "../global.css";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react"; // Importar useState

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambiar el estado al hacer clic
    };

    return (
        <header className='header-navbar'>
            
                <a href="/" className='logo-navbar'>HMD Medical</a>

                <nav className={`links-navbar ${menuOpen ? 'open' : ''}`}>
                    <a href="/">Inicio</a>
                    <a href="/contact">Contacto</a>
                    <a href="/us">Nosotros</a>
                </nav>

            
            {/* Icono de menú, que al hacer clic alterna el estado del menú */}
            <div className="menu-burger-navbar" onClick={toggleMenu}>
                <TiThMenu />
            </div>
        </header>
    );
};

export default NavBar;
