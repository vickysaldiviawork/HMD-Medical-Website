
const FlipCard = ({ title, description, link }) => {
    // Determinar si el enlace es un video (por extensión de archivo)
    const isVideo = link && (link.endsWith('.mp4') || link.endsWith('.webm') || link.endsWith('.ogg'));
    
    return (
        <div className="flip-card">
            <div className="card-front">
                <video 
                        autoPlay 
                        loop 
                        muted 
                        className="card-media"
                    >
                        <source src={link} type="video/mp4" />
                    </video>
                
            </div>
            <div className="card-body">
                <h1>{title}</h1>
                <p className="card-info">{description}</p>
            </div>
        </div>
    );
};

export default FlipCard;