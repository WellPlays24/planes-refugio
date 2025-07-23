import React from 'react';
import './Home.css'; 
import homeImage from '../assets/planes-refugio.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-container container-fluid">
      {/* Contenedor de la imagen redonda */}
      <div className="row justify-content-center align-items-center py-5">
        <div className="col-md-4 text-center">
          <div className="image-container">
            <img src={homeImage} alt="Imagen" className="home-image" />
          </div>
        </div>

        {/* Contenedor de texto */}
        <div className="col-md-8 text-center">
          <h1>Bienvenido a Planes Refugio</h1>
          <p>¡Descubre destinos increíbles y haz de cada viaje una experiencia única!</p>

          {/* Botones de navegación */}
          <div className="home-buttons mt-4">
            <Link to="/quienes-somos" className="btn btn-primary">Quienes Somos</Link>           
            <Link to="/reglas" className="btn btn-primary">Reglas</Link>
            <Link to="/layiots" className="btn btn-primary">Layiots</Link>
            <Link to="/planes" className="btn btn-primary">Planes</Link>
            <Link to="/viajes-realizados" className="btn btn-primary">Viajes Realizados</Link>
            <Link to="/viajes-pasados" className="btn btn-primary">Viajes Anteriores</Link>
            <Link to="/staff" className="btn btn-primary">Staff</Link>
            <Link to="/birthdays" className="btn btn-primary">Cumpleaños</Link>
          </div>
        </div>
      </div>

      {/* Sección Instagram */}
      <div className="instagram-link text-center mt-4">
        <p>Siguenos en:  
          <br />
          <a href="https://www.instagram.com/planesrefugio_/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E4405F',  }}></i>Instagram
          </a>
        </p>
      </div>


      

    </section>
  );
}

export default Home;
