import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Us from "./pages/Us";
import NotFound from "./pages/NotFound"; // Agrega un componente de error si aún no existe

// createBrowserRouter define las rutas de la página
export const Router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
    {
        index: true,
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/us",
        element: <Us />,
    },
    ],
},
]);