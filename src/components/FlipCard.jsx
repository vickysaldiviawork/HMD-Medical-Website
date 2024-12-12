import "../global.css";

const FlipCard = ({ title, description, link }) => {
    return (
        <div className="flipCard">
            <img src={link} className="cardImg" />
            <div className="cardBody">
                <h1 className="cardTitle">{title}</h1>
                
                <p className="cardInfo">{description}</p>
                <button className="cardButton">Ver Catálogo</button>
            </div>
        </div>
    );
};

export default FlipCard;
