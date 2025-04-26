import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './components/Home';  // Asegúrate de que la ruta de importación sea correcta
import QuienesSomos from './components/QuienesSomos';  // Asegúrate de que la ruta de importación sea correcta
import Contacto from './components/Contacto';  // Asegúrate de que la ruta de importación sea correcta
import Planes from './components/Planes';  // Asegúrate de que la ruta de importación sea correcta
import Reglas from './components/Reglas';  // Asegúrate de que la ruta de importación sea correcta
import ViajesRealizados from './components/ViajesRealizados';
import Layiots from './components/Layiots';


function App() {
  return (
    <Router>
      <Navbar />  {/* Esto muestra el navbar */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para Home */}
        <Route path="/quienes-somos" element={<QuienesSomos />} /> {/* Ruta para Quienes Somos */}
        <Route path="/contacto" element={<Contacto />} /> {/* Ruta para Contacto */}
        <Route path="/planes" element={<Planes />} /> {/* Ruta para Planes */}
        <Route path="/reglas" element={<Reglas />} /> {/* Ruta para Reglas */}
        <Route path="/viajes-realizados" element={<ViajesRealizados />} /> {/* Ruta para Viajes Realizados */}
        <Route path="/layiots" element={<Layiots />} /> {/* Ruta para Layiots */}
      </Routes>
    </Router>
  );
}

export default App;
