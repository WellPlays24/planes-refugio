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
        <Route path="/staff" element={<Staff />} /> 
        <Route path="/birthdays" element={<Birthdays />} /> 
      </Routes>
    </Router>
  );
}

export default App;
