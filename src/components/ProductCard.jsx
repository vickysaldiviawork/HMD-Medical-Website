// components/ProductCard.jsx
import '../global.css';

const ProductCard = ({ name, description, image }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={image}
                    alt={name}
                    className="product-image"
                    loading="lazy"
                />
            </div>

            <div className="product-info">
                <h3 className="product-title">{name}</h3>
                <p className="product-description">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
