import { FaHandHoldingMedical, FaUserDoctor } from "react-icons/fa6";

import "../global.css";
import { FaBriefcaseMedical, FaPumpMedical, FaPumpSoap } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";


const Us = () => {
    return <>

        <div className="about-us">
            <section className="first-section-about-us">
                <h1>¿Quiénes Somos?</h1>
            </section>

            <section className="third-section-about-us">
                <div className="mision-vision-container">
                    <div className="mision">
                        <h1>Misión</h1>
                        <p>Proveer soluciones de calidad al sector salud a través de la distribución de productos médicos y hospitalarios especializados, garantizando la disponibilidad de insumos clave para el cuidado y bienestar de los pacientes en Venezuela.</p>
                    </div>
                    <div className="vision">
                        <h1>Visión</h1>
                        <p>Convertirnos en la empresa líder en distribución de productos médicos y hospitalarios en Venezuela, destacándonos por la confiabilidad, el compromiso con la excelencia y la capacidad de adaptarnos a las necesidades del sector salud.</p>
                    </div>
                </div>
                <div className="valores">
                    <h1>Valores</h1>
                    <div className="valores-grid">
                        <div className="valor">
                            <h2>Compromiso</h2>
                            <p>Dedicados a satisfacer las necesidades del sector salud con insumos de alta calidad.</p>
                        </div>
                        <div className="valor">
                            <h2>Calidad</h2>
                            <p>Garantizar que todos nuestros productos cumplan con estándares rigurosos de seguridad y eficacia.</p>
                        </div>
                        <div className="valor">
                            <h2>Innovación</h2>
                            <p>Promover soluciones modernas y eficientes para optimizar la atención médica.</p>
                        </div>
                        <div className="valor">
                            <h2>Responsabilidad</h2>
                            <p>Actuar con ética y transparencia en cada aspecto de nuestra operación.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="second-section-about-us">
                <div className="content-second-section-about">
                    <h1>Nosotros como Empresa</h1>
                    <p>HMD MEDICAL C.A. es una empresa venezolana dedicada a la fabricación y distribución de productos médicos y hospitalarios que cumplen con los más altos estándares de calidad. Contamos con un equipo profesional comprometido en garantizar el abastecimiento confiable de insumos esenciales para el sector salud en todo el país.</p>
                </div>
                <div className="img-second-section-about"></div>
            </section>

            <section className="products-section">
                <div className="products-container">
                    <div className="section-header">
                        <h2>LO QUE OFRECEMOS</h2>
                        <p className="section-description">
                            Nuestro portafolio incluye productos esenciales para clínicas, hospitales y otros establecimientos médicos,
                            que aseguran que los profesionales de la salud cuenten con herramientas confiables y de calidad para su labor diaria.
                        </p>
                    </div>

                    <div className="products-grid">
                        {/* Columna 1 */}
                        <div className="product-card">
                            <div className="product-icon">
                                <FaPumpSoap />
                            </div>
                            <h3>BIOCLORHEX</h3>
                            <p className="product-subtitle">Solución Tópica Antimicrobiana (gluconato de clorhexidina al 2%)</p>
                            <p className="product-description">Ideal para la desinfección de heridas y la prevención de infecciones.</p>
                        </div>

                        {/* Columna 2 */}
                        <div className="product-card">
                            <div className="product-icon">
                                <FaHandHoldingMedical />
                            </div>
                            <h3>BIOGER</h3>
                            <p className="product-subtitle">Desinfectante de Alto Poder</p>
                            <p className="product-description">Una solución eficaz para mantener espacios libres de microorganismos.</p>
                        </div>

                        {/* Columna 3 */}
                        <div className="product-card">
                            <div className="product-icon">
                                <FaPumpMedical />
                            </div>
                            <h3>BIOCLORHEX Jabonoso</h3>
                            <p className="product-subtitle">(gluconato de clorhexidina al 2%)</p>
                            <p className="product-description">Limpieza profunda y protección para uso clínico.</p>
                        </div>
                        {/* Columna 4 */}
                        <div className="product-card">
                            <div className="product-icon">
                                <BiPlusMedical />
                            </div>
                            <h3>BIOSCRUB</h3>
                            <p className="product-subtitle">Cepillos Quirúrgicos</p>
                            <p className="product-description">Presentaciones con Bomuro de bencil al 1%, seco, yodo al 7,5% y gluconato de clorhexidina al 4%.</p>
                        </div>

                        {/* Columna 5 */}
                        <div className="product-card">
                            <div className="product-icon">
                                <FaUserDoctor />
                            </div>
                            <h3>BIOGEL</h3>
                            <p className="product-subtitle">Gel para Ultrasonidos</p>
                            <p className="product-description">Especialmente formulado para procedimientos de imagenología.</p>
                            <p className="product-subtitle">Lubricantes íntimos</p>
                            <p className="product-description">Especialmente formulado para procedimientos de imagenología.</p>
                        </div>

                        {/* Columna 5 */}
                        <div className="product-card">
                            <div className="product-icon">
                                <FaBriefcaseMedical />
                            </div>
                            <h3>Recolectores de Muestra</h3>
                            <p className="product-subtitle">Orina y Heces de Tapa Roja</p>
                            <p className="product-description">Prácticos y seguros para el manejo de muestras.</p>
                        </div>


                    </div>
                </div>
            </section>



        </div>

    </>
};

export default Us;
