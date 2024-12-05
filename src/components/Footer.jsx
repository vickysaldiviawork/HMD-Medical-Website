import "../global.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footerFooter">
            <div className="topFooter">
                <img src="" alt="logoHMDMedical" />
                <p className="infoHMD">
                    Somos una empresa dedicada a la fabricación, distribución y comercialización de productos médicos en Venezuela.
                </p>
            </div>

            <div className="containerFooter">
                <div className="generalFooter">
                    <h4>¿Interesado en algún producto?</h4>
                    <h3>¡Haz tu pedido ahora!</h3>
                    <button className="botonPedidoFooter">Contáctanos</button>
                </div>

                <div className="paginasFooter">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/us">Nosotros</a></li>
                    </ul>
                </div>
            </div>

            <div className="bottomFooter">
                <div className="emailInfo">
                    <AiOutlineMail /> <span>hmdventas@hmdmedical.net</span>
                </div>

                <div className="instagramInfo">
                    <FaInstagram /> <a href="https://www.instagram.com/hmdmedicalvzla/">HMD Medical Vzla</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
