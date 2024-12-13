import { useState, useEffect } from "react";
import imagen from '../assets/NoInternet.png'; 
import "../global.css"

const NoInternet = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        // Event listeners para detectar cambios de conexión
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    if (!isOnline) {
        return null; // Si hay conexión, no muestra nada
    }

    // Página personalizada para cuando no hay conexión
    return (
        <div className= "container-no-internet">
            <img src= {imagen} alt="Sin conexión" className= "image-no-internet"/>
            <h1 className= "title-no-internet">¡Oops! Sin conexión a Internet</h1>
            <p className= "message-no-internet">
                Parece que tu conexión a internet se ha perdido. Por favor, verifica tu
                red y vuelve a intentarlo.
            </p>
        </div>
    );
};

export default NoInternet;