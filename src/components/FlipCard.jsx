import "../global.css";

const FlipCard = ({ title, description, link }) => {
    return (
        <div className="flip-card">
            <img src={link} className="card-img" />
            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                
                <p className="card-info">{description}</p>
            </div>
        </div>
    );
};

export default FlipCard;
