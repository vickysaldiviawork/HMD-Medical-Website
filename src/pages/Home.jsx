import WhatsappPopUp from "../components/WhatsappPopUp";
import FlipCard from "../components/FlipCard";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";

const Home = () => {

    const categories = [
        {
            title: "Antibacteriales y Geles",
            description: "Geles antibacteriales en diversas presentaciones, desde 100ml hasta galones.",
            link: "assets/antibacterial.png"
        },
        {
            title: "Biogel y Soluciones Ultrasónicas",
            description: "Productos ideales para diagnósticos y procedimientos clínicos.",
            link: "assets/ecosonograma.png"
        },
        {
            title: "Soluciones Desinfectantes",
            description: "Clorhexidina y amonio cuaternario en galones para desinfección.",
            link: "assets/desinfectante.png"
        },
        {
            title: "Recolectores y Kits Médicos",
            description: "Recolectores de orina y heces, además de kits desechables.",
            link: "assets/muestras.png"
        }
    ];


    return (
        <>
            <div className="homePage">
                {/* Primera Sección: Overview */}
                <section className="firstSectionHome">
                    <div className="contentWrapper">
                        <h1>HMD Medical Venezuela</h1>
                        <span></span>
                    </div>
                </section>

                {/* Segunda Sección: Características destacables */}
                <section className="secondSectionHome">
                    <div className="contentWrapper">
                        <div className="titleWrapper">
                            <h1>¿POR QUÉ ELEGIRNOS?</h1>
                        </div>
                        <div className="caracteristicasHomePage">
                            <div className="caracteristicaItem">
                                <div className="iconWrapper">
                                    <div className="iconFront">
                                        <FaTruckFast />
                                    </div>
                                    <div className="iconBack">
                                        <FaTruckFast />
                                    </div>
                                </div>
                                <h3>Entrega<br/>Inmediata</h3>
                                <p>Recibe tus productos sin demoras.</p>
                                <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="botonContactoHome">Contáctanos</a>
                            </div>

                            <div className="caracteristicaItem">
                                <div className="iconWrapper">
                                    <div className="iconFront">
                                        <RiCustomerService2Fill />
                                    </div>
                                    <div className="iconBack">
                                        <RiCustomerService2Fill />
                                    </div>
                                </div>
                                <h3>Atención Personalizada</h3>
                                <p>Estamos contigo en cada paso.</p>
                                <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="botonContactoHome">Contáctanos</a>
                            </div>

                            <div className="caracteristicaItem">
                                <div className="iconWrapper">
                                    <div className="iconFront">
                                        <TbPigMoney />
                                    </div>
                                    <div className="iconBack">
                                        <TbPigMoney />
                                    </div>
                                </div>
                                <h3>Precios Competitivos</h3>
                                <p>La mejor calidad al mejor precio.</p>
                                <a href="https://api.whatsapp.com/message/MH253DEAQCSQK1?autoload=1&app_absent=0" target = "_blank" className="botonContactoHome">Contáctanos</a>
                            </div>
                        </div>

                        <p>Conoce más sobre lo que nos hace únicos.</p>
                        <a href="/us" className="botonANosotros">Descubre más</a>
                    </div>
                </section>

                {/* Tercera Sección: Acceso al catálogo */}
                <section className="thirdSectionHome">
                    <h1>Explora nuestro catálogo</h1>
                    <div className="catalogContainer">
                        {categories.map((category, index) => (
                            <FlipCard
                                key={index}
                                title={category.title}
                                description={category.description}
                                link={category.link}
                            />
                        ))}
                    </div>
                </section>

                {/* Cuarta Sección: Call to Action */}
                <section className="fourthSectionHome">
                    <div className="contentWrapper">
                        <h1>Contáctanos hoy</h1>
                        <p>Haz tu pedido ahora y garantiza los mejores productos para tu institución o negocio.</p>
                        <a href="/contacto" className="buttonToContact">Contáctanos</a>
                    </div>
                </section>
            </div>

            {/* WhatsApp PopUp */}
            <WhatsappPopUp />
        </>
    );
};

export default Home;
