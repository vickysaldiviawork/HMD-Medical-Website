import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Desplazamiento suave al principio
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // Fallback para navegadores que no soportan 'smooth'
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;