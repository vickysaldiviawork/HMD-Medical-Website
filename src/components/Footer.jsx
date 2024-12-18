import "../global.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";


const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <img src="" alt="logoHMDMedical" />
                <p className="text-top-footer">
                    Somos una empresa dedicada a la fabricación, distribución y comercialización de productos médicos en Venezuela.
                </p>
            </div>

            <div className="container-footer">
                
                <div className="general-footer">
                    <h4>¿Interesado en algún producto?</h4>
                    <h3>¡Haz tu pedido ahora!</h3>
                    <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="boton-footer">Contáctanos</a>
                </div>

                <div className="atencion-cliente-footer">
                    <h3><RiCustomerService2Fill /> Atención al Cliente</h3>

                    <div className="horarios-atencion">
                        <p><b className="dias">Lunes a Jueves</b>: 7:00 - 17:00</p>
                        <p><b className="dias">Viernes</b>: 7:00 - 15:30</p>
                        <p><b className="dias">Fin de Semana/Feriados</b>: <i>Cerrado</i></p>
                    </div>
                    
                </div>

                <div className="paginas-footer">
                    <h3><IoIosSearch /> Navegación</h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/us">Nosotros</a></li>
                    </ul>
                </div>

                

            </div>

            <div className="bottom-footer">
                <div className="email-info">
                    <AiOutlineMail /> <span>hmdventas@hmdmedical.net</span>
                </div>

                <div className="instagram-info">
                    <FaInstagram /> <a href="https://www.instagram.com/hmdmedicalvzla/" target="_blank">HMD Medical Vzla</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
