// ContactFloatingButton.jsx
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCommentDots, FaTimes } from "react-icons/fa";
import "../global.css";

const ContactFloatingButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("general");

    const contactOptions = {
        general: {
            whatsapp: "Hola, me gustaría obtener más información sobre sus servicios",
            email: "Consulta general",
        },
        productos: {
            whatsapp: "Hola, solicito más información sobre este producto",
            email: "Consulta sobre productos",
        },
        promociones: {
            whatsapp: "Hola, estoy interesado en esta promoción",
            email: "Consulta sobre promociones",
        }
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(contactOptions[currentSection].whatsapp);
        window.open(`https://api.whatsapp.com/send?phone=584242273484&text=${message}`, "_blank");
    };

    const handleEmail = () => {
        const subject = encodeURIComponent(contactOptions[currentSection].email);
        window.location.href = `mailto:hmdventas@hmdmedical.net?subject=${subject}`;
    };

    return (
        <div className="floating-contact-container">
            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="contact-menu">
                    <div className="menu-header">
                        <h4>Contáctanos</h4>
                        <button
                            className="close-button"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="contact-options">
                        <button onClick={handleWhatsApp} className="contact-option">
                            <FaWhatsapp className="option-icon" />
                            <span>WhatsApp</span>
                        </button>

                        <button onClick={handleEmail} className="contact-option">
                            <FaEnvelope className="option-icon" />
                            <span>Correo electrónico</span>
                        </button>
{/* 
                        <a href="/contact" className="contact-option">
                            <FaCommentDots className="option-icon" />
                            <span>Formulario de contacto</span>
                        </a> */}
                    </div>
                </div>
            )}

            {/* Botón principal */}
            <button
                className="floating-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menú de contacto"
            >
                <FaCommentDots className="main-icon" />
            </button>
        </div>
    );
};

export default ContactFloatingButton;