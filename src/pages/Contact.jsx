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
                        <span className='emailContact'><b>Email:</b> hmdventas@hmdmedical.net</span>
                    </div>

                    <div className="info-item map-container">
                            <div className="map-header">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span className='direccion-contact'><b>Dirección:</b> Guatire, Estado Miranda, Venezuela.</span>
                            </div>

                            <div className="embedded-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.14683511589!2d-66.54278598571478!3d10.213179592729408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a60dca6d5dc75%3A0xf4c601d80b4f3636!2sGuatire%2C%20Miranda%2C%20Venezuela!5e0!3m2!1sen!2sus!4v1623862726828!5m2!1sen!2sus"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="custom-map"
                                />
                            </div>
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
