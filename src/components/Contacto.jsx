import React from 'react';
import './Contacto.css'; // Asegúrate de tener un archivo CSS para esta sección

function Contacto() {
  return (
    <section className="contacto-container">
      <h1>Contacto</h1>
      <p>
        Para obtener más información o unirte a nuestros grupos de viajes, por favor, contacta directamente con el
        administrador del grupo. Estamos disponibles para responder cualquier duda que tengas y guiarte en todo lo que
        necesites.
      </p>
      <p className="contact-info">
        <strong>Contacto del administrador:</strong>
        <br />
        <span>Nombre: Greece</span>
        <span>WhatsApp: +593 981785853</span>
      </p>
      {/* Botón de contacto redirigiendo a WhatsApp con mensaje predeterminado */}
      <div className="text-center mt-4">
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
