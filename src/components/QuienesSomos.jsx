import React from 'react';
import './QuienesSomos.css';  // Asegúrate de tener este archivo CSS
import image from '../assets/photo1.jpg'; // Ruta de la imagen

function QuienesSomos() {
  return (
    <section className="quienes-somos-container">

      
        <h3>¿Quiénes somos?</h3>
      

      
      <div className="quienes-somos-content">
        {/* Imagen rectangular */}
        <div className="quienes-somos-image-container">
          <img
            src={image}
            alt="Quienes Somos"
            className="image-rectangular"
          />
        </div>
        
        <div className="quienes-somos-text">
          <h3>Planes Refugio</h3>
          <p>
            En Planes Refugio somos una comunidad apasionada por los viajes y la aventura. Nos dedicamos a crear recuerdos inolvidables mientras exploramos nuevos destinos. Si eres de los que busca experiencias únicas y la emoción de vivir al máximo, ¡este es el lugar perfecto para ti! Únete a nosotros y comparte la pasión por descubrir el mundo.
          </p>
          <p><strong>¡Bienvenido a bordo!</strong> 🌍✈️</p>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
