import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Villas from "../pages/Villas/Villas";
import Contact from "../pages/Details/Details";
import Schedules from "../pages/Schedules/Schedules";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Villas} path="/villas" />
      <Route Component={Contact} path="/villas/:idVilla" />
      <Route Component={Schedules} path="/schedules" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
