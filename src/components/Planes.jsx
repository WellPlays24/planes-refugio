import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de react-bootstrap
import './Planes.css'; // Opcional: Si tienes estilos adicionales
import { Link } from 'react-router-dom'; // Importa Link para la navegación

// Imágenes de ejemplo
import campingImage1 from '../assets/camping-sto-domingo.jpg';
import campingImage2 from '../assets/camping-montañita.jpg';
import campingImage3 from '../assets/camping-cavernas.png';
import campingImage4 from '../assets/2ndo-aniversario.jpg';
import campingImage5 from '../assets/camping-cuenca.jpg';

import camping6 from '../assets/camping-yagui-urco.jpg';
import camping7 from '../assets/vacaciones-cuenca.jpg';



function Planes() {
  return (
    <section className="planes-container">
      <h2 className="text-center mb-4">Próximos Viajes</h2>

      {/* Carrusel de Bootstrap */}
      <Carousel interval={4000} controls={true} indicators={true}>
        {/* Primer viaje */}
        {/* Fue eliminado por que ya se realizó */}
        {/* Debe agregarse a viajes realizados */}
          
        {/* Cuarto viaje */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={camping6}
            alt="camping yagui urco"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Cuarto viaje */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={camping7}
            alt="vacaciones-cuenca"
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
