import "../global.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container-not-found">
            <h1 className="title-not-found">404</h1>
            <p className="message-not-found">Página no encontrada</p>
            <Link to="/" className="boton-not-found">
                Volver a la página principal
            </Link>
        </div>
    );
};

export default NotFound;
