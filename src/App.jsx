import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import NoInternet from './pages/NoInternet'; // Verifica la ruta al archivo

const App = () => {
  return (
    <>
      <NoInternet />
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
