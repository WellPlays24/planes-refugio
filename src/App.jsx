import React from 'react';
import './index.css';  // Asegúrate de importar index.css
import './App.css';    // Si tienes estilos específicos para App, los puedes poner aquí
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './components/Home';  // Asegúrate de que la ruta de importación sea correcta
import QuienesSomos from './components/QuienesSomos';  // Asegúrate de que la ruta de importación sea correcta

import Planes from './components/Planes';  // Asegúrate de que la ruta de importación sea correcta
import Reglas from './components/Reglas';  // Asegúrate de que la ruta de importación sea correcta
import ViajesRealizados from './components/ViajesRealizados';
import ViajesPasados from './components/PlanesPasados'; // Asegúrate de que la ruta de importación sea correcta
import Layiots from './components/Layiots';
import Staff from './components/Staff';  
import Birthdays from './components/Birthdays'; // Asegúrate de que la ruta de importación sea correcta




function App() {

  

  return (
    <Router>
      <Navbar />  {/* Esto muestra el navbar */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/planes" element={<Planes />} /> 
        <Route path="/reglas" element={<Reglas />} /> 
        <Route path="/layiots" element={<Layiots />} /> 
        <Route path="/viajes-realizados" element={<ViajesRealizados />} />
        <Route path="/viajes-pasados" element={<ViajesPasados />} /> 
        {/* Asegúrate de que la ruta de importación sea correcta */}
        <Route path="/staff" element={<Staff />} /> 
        <Route path="/birthdays" element={<Birthdays />} /> 
      </Routes>
      {/* Sección Hecho por */}
      <div className="made-by text-center mt-4">
        <p>Developed by: <strong><a href="https://www.instagram.com/wellington.castillo1999/" target="_blank" rel="noopener noreferrer">Wellington</a></strong></p>
      </div>
    </Router>
  );
}

export default App;
