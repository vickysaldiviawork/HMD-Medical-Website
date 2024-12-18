import "../global.css";


const NotFound = () => {
    return (
        <div className="container-not-found">
            <h1 className="title-not-found">404</h1>
            <p className="message-not-found">Página no encontrada</p>
            <a href="/" className="boton-not-found">
                Volver a la página principal
            </a>
        </div>
    );
};

export default NotFound;
