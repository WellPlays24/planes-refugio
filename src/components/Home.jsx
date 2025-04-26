import React from 'react';
import './Home.css'; // Asegúrate de que el archivo CSS esté correctamente importado
import quienesSomosImage from '../assets/photo1.jpg'; // Ruta de la imagen
import homeImage from '../assets/planes-refugio.jpg'
import { Link } from 'react-router-dom';  // Importamos Link para navegación

function Home() {
  return (
    <section className="home-container">
      {/* Contenedor de la imagen redonda */}
      <div className="image-container">
        <img src={homeImage} alt="Imagen" />
      </div>

      {/* Texto y contenido */}
      <h1>Bienvenido a Planes Refugio</h1>
      <p>¡Descubre destinos increíbles y haz de cada viaje una experiencia única!</p>
      
      <div className="home-buttons">
        <Link to="/quienes-somos" className="btn btn-primary">Quienes Somos</Link>
        <Link to="/planes" className="btn btn-primary">Planes</Link>
        <Link to="/reglas" className="btn btn-primary">Reglas</Link>
        <Link to="/viajes-realizados" className="btn btn-primary">Viajes Realizados</Link>
        <Link to="/layiots" className="btn btn-primary">Layiots</Link>
      </div>
      
    </section>
  );
}

export default Home;
