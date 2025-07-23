import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de react-bootstrap
import './PlanesPasados.css'; // Opcional: Si tienes estilos adicionales
import { Link } from 'react-router-dom'; // Importa Link para la navegación

// Imágenes de ejemplo
import campingImage1 from '../assets/camping-sto-domingo.jpg';
import campingImage2 from '../assets/camping-montañita.jpg';
import campingImage3 from '../assets/camping-cavernas.png';
import campingImage4 from '../assets/2ndo-aniversario.jpg';
import campingImage5 from '../assets/camping-cuenca.jpg';

import campingImage6 from '../assets/camping-yagui-urco.jpg';
import campingImage7 from '../assets/vacaciones-cuenca.jpg';
import campingImage8 from '../assets/camping-jipijapa.jpg';



function PlanesPasados() {
  return (
    <section className="planes-container">
      <h2 className="text-center mb-4">Viajes Anteriores</h2>

      {/* Carrusel de Bootstrap */}
      <Carousel interval={4000} controls={true} indicators={true}>
        {/* Primer viaje */}
        {/* Fue eliminado por que ya se realizó */}
        {/* Debe agregarse a viajes realizados */}
          
        

        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage1}
            alt="camping sto domingo"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage2}
            alt="camping montañita"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage3}
            alt="camping cavernas"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage4}
            alt="camping 2ndo aniversario"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage5}
            alt="camping cuenca"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campingImage6}
            alt="camping yagui urco"
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

export default PlanesPasados;
