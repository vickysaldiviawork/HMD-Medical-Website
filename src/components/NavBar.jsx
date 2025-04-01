import "../global.css";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react"; // Importar useState
import { Link } from "react-router-dom";


export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambiar el estado al hacer clic
    };

    return (
        <header className='header-navbar'>
            
                <Link to="/" className='logo-navbar'>HMD Medical Venezuela</Link>

                <nav className={`links-navbar ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className="links">Inicio</Link>
                    <Link to="https://drive.google.com/drive/folders/1tqv3BXyZdG5VCpai5pVDvWGStijtaKej?usp=drive_link" target="_blank" className="links">Catálogo</Link>
                    <Link to="/us" className="links">Nosotros</Link>
                    <Link to="/contact" className="links">Contacto</Link>
                </nav>

            
            {/* Icono de menú, que al hacer clic alterna el estado del menú */}
            <div className="menu-burger-navbar" onClick={toggleMenu}>
                <TiThMenu />
            </div>
        </header>
    );
};

export default NavBar;
