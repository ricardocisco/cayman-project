import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Navbar from "../components/Navbar/Navbar";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={About} path="/sobre" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
