import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de react-bootstrap
import './Planes.css'; // Opcional: Si tienes estilos adicionales
import { Link } from 'react-router-dom'; // Importa Link para la navegación

// Imágenes de ejemplo
import campingImage1 from '../assets/camping-sto-domingo.jpg';
import campingImage2 from '../assets/camping-montañita.jpg';
import campingImage3 from '../assets/camping-cavernas.png';


function Planes() {
  return (
    <section className="planes-container">
      <h2 className="text-center mb-4">Próximos Viajes</h2>

      {/* Carrusel de Bootstrap */}
      <Carousel interval={4000} controls={true} indicators={true}>
        {/* Primer viaje */}
        {/* Fue eliminado por que ya se realizó */}
        {/* Debe agregarse a viajes realizados */}
        

        {/* Segundo viaje */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage2} // Cambia esta ruta según la ubicación de la imagen
            alt="Camping Montañita"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Tercer viaje */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage3} // Cambia esta ruta según la ubicación de la imagen
            alt="Camping Cavernas de Chillayacu"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='text-center mb-4'>
        
      <p>Para más detalles, contacta a nuestro <Link to="/staff">staff</Link>.</p>


      </div>
      

    </section>
  );
}

export default Planes;
