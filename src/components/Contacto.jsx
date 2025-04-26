import React from 'react';
import './Contacto.css'; // Asegúrate de tener un archivo CSS para esta sección
import pictureAdmin from '../assets/admin.png'; // Asegúrate de tener la imagen en esta ruta

function Contacto() {
  return (
    <section className="contacto-container container py-5">
      <h1 className="text-center mb-4">Contacto</h1>

      {/* Card para el contacto del administrador */}
      <div className="card mb-4">
        <div className="row g-0">
          {/* Imagen del administrador */}
          <div className="col-md-4">
            <img
              src={pictureAdmin}
              alt="Administrador"
              className="img-fluid rounded-circle"
            />
          </div>

          {/* Información de contacto */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Contacto del Administrador</h5>
              <p className="card-text">
                <strong>Nombre:</strong> Greece
              </p>
              <p className="card-text">
                <strong>WhatsApp:</strong> +593 981785853
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para contactar por WhatsApp */}
      <div className="text-center">
        <a
          href="https://wa.me/593981785853?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20el%20grupo."
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar ahora en WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contacto;
