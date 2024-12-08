import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';  // Icons for the contact details
import "../global.css";

const Contact = () => {
    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0', '_blank');
    };

    return (
        <>
            <div className='contactPage'>

                <div className="contactInfo">
                    <h2>Contacto</h2>
                    <p>Para cualquier duda o consulta, no dudes en comunicarte con nosotros:</p>

                    <div className="info-item" onClick={openWhatsApp}>
                        <FaPhone className="contact-icon" />
                        <a><b>Teléfono:</b> +58 424 227 3484</a>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="contact-icon" />
                        <span><b>Email:</b> contacto@hmdmedical.com</span>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span><b>Dirección:</b> Guatire, Estado Miranda, Venezuela.</span>
                    </div>

                    <h2 className='redestitle'>Redes Sociales</h2>
                    <p>¡Encuéntranos en las Redes!</p>
                    
                    <div className="instagramInfoContact">
                        <FaInstagram /> <a href="https://www.instagram.com/hmdmedicalvzla/">HMD Medical Vzla</a>
                    </div>
                </div>


                <div className="nosotrosInfo">

                </div>
            </div>
        </>
    )
};


export default Contact;
