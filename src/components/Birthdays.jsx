import React, { useState } from 'react';
import Calendar from 'react-calendar';  // Importamos react-calendar
import './Birthdays.css';  // Asegúrate de tener este archivo de estilo
import well from '../assets/birthdays/well.png'; 
import greece from '../assets/birthdays/greece.png';
import becca from '../assets/birthdays/becca.png';
import nicole from '../assets/birthdays/nicole.png';
import danny from '../assets/birthdays/danny.png';
import alex from '../assets/birthdays/alex.png';
import bernal from '../assets/birthdays/bernal.png';
import damian from '../assets/birthdays/damian.png';
import maria from '../assets/birthdays/maria.png';

// Datos de ejemplo de cumpleaños
const birthdayMembers = [
  {
    id: 1,
    name: 'Greece',
    birthday: '1999-05-30',
    place: 'Manta',
    image: greece,
  },
  {
    id: 2,
    name: 'Becca',
    birthday: '1999-05-30',
    place: 'Guayaquil',
    image: becca,
  },
  {
    id: 3,
    name: 'Alex',
    birthday: '2025-11-21', // 20 de noviembre
    place: 'Santo Domingo',
    image: alex,
  },
  {
    id: 4,
    name: 'Wellington',
    birthday: '1999-05-31', // 30 de mayo
    place: 'Machala',
    image: well,
  },
  {
    id: 5,
    name: 'Nicole',
    birthday: '2025-04-29', // 28 de abril
    place: 'Manta',
    image: nicole,
  },
  {
    id: 6,
    name: 'Danny',
    birthday: '1999-05-30',
    place: 'Manta',
    image: danny,
  },
  {
    id: 7,
    name: 'Bernal',
    birthday: '1999-05-30',
    place: 'Manta',
    image: bernal,
  },
  {
    id: 8,
    name: 'Damian',
    birthday: '1999-05-30',
    place: 'Quito',
    image: damian,
  },
  {
    id: 9,
    name: 'Maria',
    birthday: '2025-05-21', // 20 de mayo
    place: 'Cuenca',
    image: maria,
  },
  // Añadir más miembros con cumpleaños según sea necesario
];

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

  // Función para dar formato a la fecha
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

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
