import React from 'react';
import './ViajesRealizados.css'; // Estilos específicos para este componente

// Imágenes importadas correctamente
import viaje1 from '../assets/viaje-cruzita.jpg'; // Asegúrate de tener la imagen en esta ruta
import viaje2 from '../assets/viaje-puerto-lopez.jpg'; // Asegúrate de tener la imagen en esta ruta
import viaje3 from '../assets/viaje-mama-angelita.jpg'; // Asegúrate de tener la imagen en esta ruta

function ViajesRealizados() {
  // Datos de ejemplo (esto puede venir de una API o de un archivo JSON)
  const viajes = [
    {
      id: 1,
      nombre: "Viaje a la playa",
      fecha: "2023-05-01",
      lugar: "Crucita",
      descripcion: "",
      imagen: viaje1, // Usamos la variable de la imagen importada
    },
    {
      id: 2,
      nombre: "Aventura en la playa",
      fecha: "2023-06-15",
      lugar: "Puerto López",
      descripcion: "",
      imagen: viaje2, // Usamos la variable de la imagen importada
    },
    {
      id: 3,
      nombre: "Tour en la selva",
      fecha: "2023-07-20",
      lugar: "Naranjal - Finca Mamá Angelita",
      descripcion: "",
      imagen: viaje3, // Usamos la variable de la imagen importada
    },
  ];

  return (
    <section className="viajes-realizados">
      <h2>Viajes Realizados</h2>
      <div className="viajes-list">
        {viajes.map((viaje) => (
          <div key={viaje.id} className="viaje-card">
            <img
              src={viaje.imagen} // Usamos la variable `imagen` correctamente
              alt={viaje.nombre}
              className="viaje-image"
            />
            <div className="viaje-info">
              <h3>{viaje.nombre}</h3>
              <p><strong>Lugar:</strong> {viaje.lugar}</p>
              <p><strong>Fecha:</strong> {viaje.fecha}</p>
              <p>{viaje.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ViajesRealizados;
