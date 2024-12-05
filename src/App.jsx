import Router from "./Router";
import NoInternet from './pages/NoInternet'; // Verifica la ruta al archivo

const App = () => {
  return (
    <>
      <NoInternet />
      <Router />
    </>
  );
};

export default App;
