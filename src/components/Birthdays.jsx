import React, { useState } from 'react';
import Calendar from 'react-calendar';  // Importamos react-calendar
import './Birthdays.css';  // Asegúrate de tener este archivo de estilo
import birthdayMembers from '../data/birthdayMembers';  // Importamos los datos de cumpleaños

// Función para dar formato a la fecha
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
};

function Birthdays() {
  // Estado para la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filtramos a los miembros según la fecha seleccionada (comparando solo mes y día)
  const filteredMembers = birthdayMembers.filter(member => {
    const birthday = new Date(member.birthday);
    const selected = new Date(selectedDate);

    // Comparamos solo el mes y el día
    return (
      birthday.getMonth() === selected.getMonth() &&
      birthday.getDate() === selected.getDate()
    );
  });

  return (
    <section className="cumpleaños-container">
      {/* Botón para redirigir a la encuesta */}
      <div className="survey-button-container">
        <a href="https://forms.gle/jQ5XjNef2qppAoj19" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Completa la encuesta para agregar tu cumpleaños
        </a>
      </div>

      <h2>Selecciona una Fecha para Ver los Cumpleaños</h2>

      <div className="calendar-container">
        {/* Calendario */}
        <Calendar
          onChange={setSelectedDate}  // Actualiza la fecha seleccionada
          value={selectedDate}  // Valor de la fecha seleccionada
        />
      </div>

      {/* Mostrar la fecha seleccionada */}
      <h2>Cumpleaños el {formatDate(selectedDate)}</h2>

      <div className="birthday-list">
        {filteredMembers.length > 0 ? (
          filteredMembers.map(member => (
            <div key={member.id} className="birthday-card">
              <img src={member.image} alt={member.name} className="birthday-image" />
              <h3>{member.name}</h3>
              <p>¡Feliz cumpleaños!</p>
              <h5>{member.place}</h5>
            </div>
          ))
        ) : (
          <p>No hay cumpleaños para esta fecha.</p>
        )}
      </div>
    </section>
  );
}

export default Birthdays;
