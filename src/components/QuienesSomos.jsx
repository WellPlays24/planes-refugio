import React from 'react';
import './QuienesSomos.css'; // Asegúrate de que el archivo CSS esté correctamente importado
import quienesSomosImage from '../assets/photo1.jpg'; // Ruta de la imagen

function QuienesSomos() {
  return (
    <section className="quienes-somos-container">
      {/* Imagen rectangular */}
      <img className="quienes-somos-image" src={quienesSomosImage} alt="Quienes Somos" />

      {/* Texto y contenido */}
      <h1>¿Quiénes somos?</h1>
      <div className="quienes-somos-text">
        <p>
            En <strong>Planes Refugio</strong> somos una comunidad apasionada por los viajes y la aventura. 
            
        </p>
        <p>
            Nos dedicamos a crear recuerdos inolvidables mientras exploramos nuevos destinos. Si eres de los que busca experiencias únicas y la emoción de vivir al máximo, ¡este es el lugar perfecto para ti! Únete a nosotros y comparte la pasión por
            descubrir el mundo. ¡Bienvenido a bordo! 🌍✈️
        </p>
      </div>
      
      
    </section>
  );
}

export default QuienesSomos;
