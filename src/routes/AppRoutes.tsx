import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={About} path="/villas" />
      <Route Component={Contact} path="/villas/:idVilla" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
