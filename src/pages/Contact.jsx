import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';  // Icons for the contact details

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
                        <a className='telfContact'><b>Teléfono:</b> +58 424 227 3484</a>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="contact-icon" />
                        <span className='emailContact'><b>Email:</b> hmdventas@hmdmedica.net</span>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span className='direccContact'><b>Dirección:</b> Guatire, Estado Miranda, Venezuela.</span>
                    </div>

                </div>

                <div className='contactInfo'>
                    <div className='adicionalContact'>
                        <div>
                            <h2>Redes Sociales</h2>
                            <p>¡Encuéntranos en las Redes!</p>
                            <div className="instagramInfoContact">
                                <FaInstagram /> <a href="https://www.instagram.com/hmdmedicalvzla/">HMD Medical Vzla</a>
                            </div>
                        </div>

                        <div>
                            <h2>Conócenos</h2>
                            <p>Descubre <b>quiénes somos</b>, nuestra historia y lo que nos inspira a seguir creciendo:</p>
                            <div className="instagramInfoContact">
                                <a href="/us">Nosotros</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};


export default Contact;
