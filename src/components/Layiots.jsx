import React from 'react';
import './Layiots.css'; // Estilos para el componente

function Layiots() {
  // Top 5 de personas con más Layiots (esto puede provenir de una API o base de datos)
  const topUsuarios = [
    { id: 1, nombre: 'Alex', puntos: 5 },
    { id: 2, nombre: 'Nicole', puntos: 4 },
    { id: 3, nombre: 'Danny', puntos: 4 },
    { id: 4, nombre: 'Bernal', puntos: 4 },
    { id: 5, nombre: 'Pedro', puntos: 3 },
    { id: 6, nombre: 'Nadia', puntos: 3 },
    { id: 7, nombre: 'Gabo', puntos: 3 }
  ];

  // Actividades para ganar Layiots
  const actividades = [
    { actividad: "Asistir a un plan", puntos: 1 },
    { actividad: "Invitar a un miembro más", puntos: 2 },
    { actividad: "Compartir anuncios en redes sociales", puntos: 1 },
    { actividad: "Prestación de servicios", puntos: 5 },
  ];

  // Premios disponibles
  const premios = [
    { nombre: "Un pastel personal", costo: 15 },
    { nombre: "Caja de chocolates", costo: 30 },
    { nombre: "Un viaje gratis de PR", costo: 150 },
    { nombre: "Vuelo en parapente", costo: 155 },
  ];

  return (
    <section className="layiots-container">
      
      {/* Sección del Top 5 de usuarios con más Layiots */}
      <h2>Top 7 Usuarios con Más Layiots</h2>
      <div className="top-usuarios">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Layiots</th>
            </tr>
          </thead>
          <tbody>
            {topUsuarios.map((usuario, index) => (
              <tr key={usuario.id}>
                <td>{index + 1}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.puntos} Lyt</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sección de Actividades para ganar Layiots */}
      <h2>Actividades para Ganar Layiots</h2>
      <div className="actividades-list">
        {actividades.map((actividad, index) => (
          <div key={index} className="actividad-card">
            <h5>{actividad.actividad}</h5>
            <p>{actividad.puntos} Lyt</p>
          </div>
        ))}
      </div>

      {/* Sección de Premios Disponibles */}
      <h2>Premios Disponibles</h2>
      <div className="premios-list">
        {premios.map((premio, index) => (
          <div key={index} className="premio-card">
            <h4>{premio.nombre}</h4>
            <p>{premio.costo} Lyt</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Layiots;
