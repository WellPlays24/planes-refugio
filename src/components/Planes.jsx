import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de react-bootstrap
import './Planes.css'; // Opcional: Si tienes estilos adicionales

// Imágenes de ejemplo
import campingImage1 from '../assets/camping-sto-domingo.jpg';
import campingImage2 from '../assets/camping-amazonia.jpg';


function Planes() {
  return (
    <section className="planes-container">
      <h2 className="text-center mb-4">Próximos Viajes</h2>

      {/* Carrusel de Bootstrap */}
      <Carousel interval={4000} controls={true} indicators={true}>
        {/* Primer viaje */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage1} // Cambia esta ruta según la ubicación de la imagen
            alt="Camping Santo Domingo"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Segundo viaje */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage2} // Cambia esta ruta según la ubicación de la imagen
            alt="Camping Amazonia"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        

      </Carousel>
    </section>
  );
}

export default Planes;
