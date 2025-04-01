import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    // Datos del carrusel (modificar con tus imágenes y contenido)
    const slides = [
        {
            title: "Nuevos Lanzamientos",
            subtitle: "Descubre nuestra línea de antibacteriales",
            image: "url('/src/assets/banner1.jpg')",
            ctaText: "Ver Productos",
            ctaLink: "/catalog"
        },
        {
            title: "Oferta Especial",
            subtitle: "Hasta 30% de descuento en soluciones desinfectantes",
            image: "url('/src/assets/banner2.jpg')",
            ctaText: "Aprovechar Oferta",
            ctaLink: "/promociones"
        },
        {
            title: "Biogel Ultrasónico",
            subtitle: "La mejor calidad para tus equipos médicos",
            image: "url('/src/assets/banner3.jpg')",
            ctaText: "Saber Más",
            ctaLink: "/productos/biogel"
        }
    ];

    return (
        <div className="hero-carousel">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <div
                            className="slide-background"
                            style={{ backgroundImage: slide.image }}
                        >
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.ctaLink} className="cta-button">
                                    {slide.ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;