import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './Reglas.css'; // Estilos personalizados

function Reglas() {
  return (
    <section className="container my-5">
      <h1 className="text-center mb-4">Reglas de Planes Refugio</h1>
      
      <div className="card">
        <div className="card-header">
          <h3>¡Bienvenidos a todos los miembros nuevos!</h3>
        </div>
        <div className="card-body">
          <p>
            En <strong>Planes Refugio</strong>, nos dedicamos a organizar viajes y ofrecer planes temáticos. Aquí nos gusta disfrutar de la aventura, la cultura y la naturaleza.
          </p>

          <h5>¿Qué es PR?</h5>
          <p>
            <strong>PR (Planes Refugio)</strong> es un grupo de jóvenes apasionados por la aventura y el descubrimiento. Organizamos viajes al menos una vez al mes, ofreciendo experiencias únicas para explorar y disfrutar de la cultura local, naturaleza y diversión.
          </p>

          <h5>Normas y Strike</h5>
          <p>
            Un <strong>strike</strong> es una llamada de atención, y con <strong>dos strikes</strong>, lamentablemente se dará de baja al miembro. Los strikes se renovarán cada 2 meses. Los motivos por los cuales se puede dar un strike son:
          </p>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">Insultos o malos tratos a alguien que no tenga confianza.</li>
            <li className="list-group-item">Enviar contenido inapropiado (pornografía, videos violentos, etc.).</li>
            <li className="list-group-item">Cancelar asistencia a un plan sin justificación.</li>
            <li className="list-group-item">Spam de mensajes, stickers, audios, etc.</li>
            <li className="list-group-item">Conductas indebidas en los planes (peleas físicas, acoso, abusos, etc.).</li>
          </ul>

          <h5 className="mt-3">Instrucciones de Participación</h5>
          <p>
            - <strong>No agregar a nadie sin pasar por el filtro</strong>: Toda persona en el grupo debe ser revisada primero por los administradores.
            <br />
            - <strong>La participación activa se recompensa</strong>: Participando en los grupos o viajando seguido, comenzarás a obtener recompensas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reglas;
