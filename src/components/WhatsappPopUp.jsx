import { FaWhatsapp} from "react-icons/fa"; // Asegúrate de tener 'react-icons' instalado
import "../global.css";

const WhatsappPopUp = () => {
    return(
        <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0"
            className="iconWhatsappPopUp"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={40} />
        </a>
    )
};

export default WhatsappPopUp;
