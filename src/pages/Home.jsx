import WhatsappPopUp from "../components/WhatsappPopUp";
import FlipCard from "../components/FlipCard";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";

import AntibacterialImg from "../assets/antibacterial.png";
import EcosonogramaImg from "../assets/ecosonograma.png";
import DesinfectanteImg from "../assets/desinfectante.png";
import MuestrasImg from "../assets/muestras.png";

import { Link } from "react-router-dom";


const Home = () => {

    const categories = [
        {
            title: "Antibacteriales y Geles",
            description: "Geles antibacteriales en diversas presentaciones, desde 100ml hasta galones.",
            link: AntibacterialImg 
        },
        {
            title: "Biogel y Soluciones Ultrasónicas",
            description: "Productos ideales para diagnósticos y procedimientos clínicos.",
            link: EcosonogramaImg 
        },
        {
            title: "Soluciones Desinfectantes",
            description: "Clorhexidina y amonio cuaternario en galones para desinfección.",
            link: DesinfectanteImg 
        },
        {
            title: "Recolectores y Kits Médicos",
            description: "Recolectores de orina y heces, además de kits desechables.",
            link: MuestrasImg 
        }
    ];


    return (
        <>
            <div className="home-page">
                {/* Primera Sección: Overview */}
                <section className="first-section-home-page">
                    <div className="content-wrapper">
                        <h1>HMD Medical Venezuela</h1>
                        <span></span>
                    </div>
                </section>

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
                                <h3>Entrega<br/>Inmediata</h3>
                                <p>Recibe tus productos sin demoras.</p>
                                <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="boton-contacto-home">Contáctanos</a>
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
                                <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="boton-contacto-home">Contáctanos</a>
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
                                <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="boton-contacto-home">Contáctanos</a>
                            </div>
                        </div>

                        <p>Conoce más sobre lo que nos hace únicos.</p>
                        <Link to="/us" className="boton-nosotros-home">Descubre más</Link>
                    </div>
                </section>

                {/* Tercera Sección: Acceso al catálogo */}
                <section className="third-section-home-page">
                    <div className="content-wrapper">
                        <h1>Explora nuestro <a href="">catálogo</a></h1>
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
                        <h1>...¡y más!</h1>
                    </div>
                </section>

                {/* Cuarta Sección: Call to Action */}
                <section className="fourth-section-home-page">
                    <div className="content-container">
                        <h1>Suministros Esenciales, Cuidado Excepcional</h1>
                        <p><strong>Enfocados, confiables y eficientes.</strong><br/>Nuestra selección cuidadosamente elaborada de suministros médicos está aquí para apoyarte: ofrecemos productos de confianza con un servicio inigualable.</p>
                        <p>Trabajemos juntos — ¡contáctanos hoy mismo!</p>
                        <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="fourth-section-boton-contacto">Contáctanos</a>
                    </div>
                </section>

            </div>

            {/* WhatsApp PopUp */}
            <WhatsappPopUp />
        </>
    );
};

export default Home;
