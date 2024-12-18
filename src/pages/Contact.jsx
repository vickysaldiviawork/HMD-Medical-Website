import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';  // Icons for the contact details
import { Link } from "react-router-dom";


const Contact = () => {
    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0', '_blank');
    };

    return (
        <>
            <div className='contact-page'>

                <div className="contact-info">
                    <h2>Contacto</h2>
                    <p>Para cualquier duda o consulta, no dudes en comunicarte con nosotros:</p>

                    <div className="info-item" onClick={openWhatsApp}>
                        <FaPhone className="contact-icon" />
                        <a className='telf-contact'><b>Teléfono:</b> +58 424 227 3484</a>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="contact-icon" />
                        <span className='emailContact'><b>Email:</b> hmdventas@hmdmedica.net</span>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span className='direccion-contact'><b>Dirección:</b> Guatire, Estado Miranda, Venezuela.</span>
                    </div>

                </div>

                <div className='contact-info'>
                    <div className='adicional-contact'>
                        <div>
                            <h2>Redes Sociales</h2>
                            <p>¡Encuéntranos en las Redes!</p>
                            <div className="instagram-info-contact">
                                <FaInstagram /> <a href="https://www.instagram.com/hmdmedicalvzla/" target='_blank'>HMD Medical Vzla</a>
                            </div>
                        </div>

                        <div>
                            <h2>Conócenos</h2>
                            <p>¡Descubre <b>quiénes somos</b>!</p>
                            <div className="instagram-info-contact">
                                <Link to="/us">Nosotros</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};


export default Contact;
