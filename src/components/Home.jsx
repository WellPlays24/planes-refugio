import React from 'react';
import './Home.css'; // Asegúrate de que el archivo CSS esté correctamente importado
import homeImage from '../assets/planes-refugio.jpg';
import { Link } from 'react-router-dom';  // Importamos Link para navegación

function Home() {
  return (
    <section className="home-container container-fluid">
      {/* Contenedor de la imagen redonda */}
      <div className="row justify-content-center align-items-center py-5">
        <div className="col-md-4 text-center">
          <div className="image-container">
            <img src={homeImage} alt="Imagen" className="img-fluid rounded-circle" />
          </div>
        </div>

        {/* Contenedor de texto */}
        <div className="col-md-8 text-center">
          <h1 className="display-4 text-primary">Bienvenido a Planes Refugio</h1>
          <p className="lead">¡Descubre destinos increíbles y haz de cada viaje una experiencia única!</p>

          {/* Botones de navegación */}
          <div className="home-buttons mt-4">
            <Link to="/quienes-somos" className="btn btn-primary m-2">Quienes Somos</Link>
            <Link to="/planes" className="btn btn-primary m-2">Planes</Link>
            <Link to="/reglas" className="btn btn-primary m-2">Reglas</Link>
            <Link to="/viajes-realizados" className="btn btn-primary m-2">Viajes Realizados</Link>
            <Link to="/layiots" className="btn btn-primary m-2">Layiots</Link>
          </div>
        </div>
      </div>

      {/* Sección Hecho por */}
      <div className="made-by text-center mt-4">
        <p>Hecho por: <strong>Wellington</strong></p>
      </div>
    </section>
  );
}

export default Home;
