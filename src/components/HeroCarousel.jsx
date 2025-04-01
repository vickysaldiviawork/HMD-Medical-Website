import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    // Enlace directo a WhatsApp con mensaje predefinido
    const whatsappLink = "https://api.whatsapp.com/send?phone=584242273484&text=Buenas,%20estoy%20interesado/a%20en%20conocer%20sobre%20sus%20promociones%20y/o%20descuentos";

    const slides = [
        {
            title: "HMD Medical Venezuela",
            subtitle: "Tu aliado confiable en salud",
            image: banner2,
            ctaText: "Conócenos",
            ctaLink: "/Us"
        },
        {
            title: "Nuevos Lanzamientos",
            subtitle: "Descubre nuestras diferentes categorías de productos",
            image: banner1,
            ctaText: "Ver Productos",
            ctaLink: "https://drive.google.com/file/d/15NVln3OKnJu7ioEm_YC2-_84eFgsPu1C/view?usp=sharing",
            isExternal: true
        },
        {
            title: "Ofertas Especiales",
            subtitle: "Pregunta por nuestras promociones, descuentos y combos.",
            image: banner3,
            ctaText: "Ver Ofertas",
            ctaLink: whatsappLink,
            isExternal: true
        },
    ];

    return (
        <div className="hero-carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="hero-slide">
                        <div 
                            className="slide-content"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="slide-overlay"></div>
                            <div className="slide-text">
                                <h1>{slide.title}</h1>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                {slide.isExternal ? (
                                    <a 
                                        href={slide.ctaLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="boton-nosotros-home"
                                    >
                                        {slide.ctaText}
                                    </a>
                                ) : (
                                    <Link to={slide.ctaLink} className="boton-nosotros-home">
                                        {slide.ctaText}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;