import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import NavbarApp from "./components/NavbarApp ";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound.jsx"

function App() {

  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;