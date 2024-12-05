import "../global.css";


const NotFound = () => {
    return (
        <div className="containerNotFound">
            <h1 className="titleNotFound">404</h1>
            <p className="messageNotFound">Página no encontrada</p>
            <a href="/" className="buttonNotFound">
                Volver a la página principal
            </a>
        </div>
    );
};

export default NotFound;
