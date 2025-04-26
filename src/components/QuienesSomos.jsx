import React from 'react';
import './QuienesSomos.css'; // Si tienes estilos adicionales
import quienesSomosImage from '../assets/photo1.jpg'; // Ruta de la imagen

function QuienesSomos() {
  return (
    <section className="quienes-somos-container container py-5">
      <h2 className="text-center mb-4">¿Quiénes somos?</h2>

      {/* Card con imagen y texto - Usando Flexbox para alinear */}
      <div className="card mb-3">
        <div className="row g-0">
          {/* Imagen - Colocada a la izquierda y ocupando el 50% del ancho */}
          <div className=" image-container">
            <img src={quienesSomosImage} alt="Quienes Somos" className="img-fluid img-thumbnail" />
            <br />
          </div>
          
          {/* Texto de la card - Ocupa el 50% del ancho */}
          <div className="col-md-6">
            <div className="card-body">
              <br />
              <h5 className="card-title">Planes Refugio</h5>
              <p className="card-text">
                En <strong>Planes Refugio</strong> somos una comunidad apasionada por los viajes y la aventura. Nos dedicamos a crear recuerdos inolvidables mientras exploramos nuevos destinos. 
                Si eres de los que busca experiencias únicas y la emoción de vivir al máximo, ¡este es el lugar perfecto para ti! Únete a nosotros y comparte la pasión por descubrir el mundo.
                <br />
                <strong>¡Bienvenido a bordo! 🌎✈️</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
