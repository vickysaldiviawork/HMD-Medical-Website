import FlipCard from "../components/FlipCard";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";

import { FaArrowRight } from 'react-icons/fa';

import AntibacterialImg from "../assets/ControlInfecciones.mp4";
import EcosonogramaImg from "../assets/RecolectorMuestra.mp4";
import DesinfectanteImg from "../assets/Higiene.mp4";

import { Link } from "react-router-dom";
import ContactFloatingButton from "../components/ContactFloatingButton";
import HeroCarousel from "../components/HeroCarousel";


const Home = () => {

    const categories = [
        {
            title: "Control de Infecciones",
            description: "Geles antibacteriales, desinfectantes hospitalarios, y más.",
            link: AntibacterialImg 
        },
        {
            title: "Apoyo Diagnóstico",
            description: "Geles para ultrasonidos, recolectores de muestras, y más.",
            link: EcosonogramaImg 
        },
        {
            title: "Cuidado del Paciente",
            description: "Lubricantes íntimos, productos de higiene, y más.",
            link: DesinfectanteImg 
        },
    ];
    

    return (
        <>

        
            <div className="home-page">
                {/* Primera Sección: Overview */}
                <HeroCarousel />
                {/* <section className="first-section-home-page">
                    <div className="content-wrapper">
                        <h1>HMD Medical Venezuela</h1>
                        <span></span>
                    </div>
                </section> */}

                {/* Segunda Sección: Características destacables */}
                <section className="second-section-home-page">
                    <div className="content-wrapper">
                        <h1>¿Por qué elegirnos?</h1>

                        <div className="caracteristicas-home-page">
                            <div className="caracteristicas-item">
                                <div className="icon-wrapper">
                                    <div className="icon-front">
                                        <FaTruckFast />
                                    </div>
                                    <div className="icon-back">
                                        <FaTruckFast />
                                    </div>
                                </div>
                                <h3>Entrega Inmediata</h3>
                                <p>Recibe tus productos sin demoras.</p>
                            </div>

                            <div className="caracteristicas-item">
                                <div className="icon-wrapper">
                                    <div className="icon-front">
                                        <RiCustomerService2Fill />
                                    </div>
                                    <div className="icon-back">
                                        <RiCustomerService2Fill />
                                    </div>
                                </div>
                                <h3>Atención Personalizada</h3>
                                <p>Estamos contigo en cada paso.</p>
                            </div>

                            <div className="caracteristicas-item">
                                <div className="icon-wrapper">
                                    <div className="icon-front">
                                        <TbPigMoney />
                                    </div>
                                    <div className="icon-back">
                                        <TbPigMoney />
                                    </div>
                                </div>
                                <h3>Precios Competitivos</h3>
                                <p>La mejor calidad al mejor precio.</p>
                            </div>
                        </div>

                        <Link to="/us" className="catalog-ref-link">Conoce más sobre lo que nos hace únicos.</Link>
                    </div>
                </section>

                {/* Tercera Sección: Acceso al catálogo */}
                <section className="third-section-home-page">
                    <div className="content-wrapper">
                        <h1>Soluciones para cada necesidad médica</h1>
                        <p className="section-subtitle">Productos diseñados para optimizar los procesos en instituciones de salud</p>
                        <div className="catalog-container">
                            {categories.map((category, index) => (
                                <FlipCard
                                    key={index}
                                    title={category.title}
                                    description={category.description}
                                    link={category.link}
                                />
                            ))}
                        </div>
                        <Link to="https://drive.google.com/drive/folders/1tqv3BXyZdG5VCpai5pVDvWGStijtaKej?usp=drive_link" className="catalog-ref-link">
                            Visualiza nuestros productos
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </div>
                </section>

                {/* Cuarta Sección: Call to Action */}
                <section className="fourth-section-home-page">
                    <div className="content-container">
                        <h1>Suministros Esenciales, Cuidado Excepcional</h1>
                        <p><strong>Enfocados, confiables y eficientes.</strong><br/>Nuestra selección cuidadosamente elaborada de suministros médicos está aquí para apoyarte: ofrecemos productos de confianza con un servicio inigualable.</p>
                        <p>Trabajemos juntos — ¡contáctanos hoy mismo!</p>
                    </div>
                </section>

            </div>

            {/* Botón de contacto flotante */}
            <ContactFloatingButton />
        </>
    );
};

export default Home;
