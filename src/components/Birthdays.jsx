import React, { useState } from 'react';
import Calendar from 'react-calendar';  // Importamos react-calendar
import './Birthdays.css';  // Asegúrate de tener este archivo de estilo
import birthdayMembers from '../data/birthdayMembers';  // Importamos los datos de cumpleaños
import Swal from 'sweetalert2'; // Importamos SweetAlert2

// Función para dar formato a la fecha
const formatDate = (date) => {
  const options = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
};

// Función para calcular la edad
const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age+1;
};

function Birthdays() {
  // Estado para la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('day');  // Añadimos el modo de vista (día o mes)

  // Filtramos y ordenamos a los miembros según la fecha seleccionada (comparando solo mes y día)
  const filteredMembers = birthdayMembers
    .filter(member => {
      const birthday = new Date(member.birthday);
      const selected = new Date(selectedDate);

      // Comparamos solo el mes y el día para el modo de día
      if (viewMode === 'day') {
        return (
          birthday.getMonth() === selected.getMonth() &&
          birthday.getDate() === selected.getDate()
        );
      }

      // Comparamos solo el mes para el modo de mes
      if (viewMode === 'month') {
        return birthday.getMonth() === selected.getMonth();
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.birthday);
      const dateB = new Date(b.birthday);
      
      // Comparamos primero por mes, luego por día
      return dateA.getMonth() - dateB.getMonth() || dateA.getDate() - dateB.getDate();
    });

  // Función para mostrar la alerta con información del cumpleaños
  const showAlert = (member) => {
    Swal.fire({
      title: `¡Feliz Cumpleaños, ${member.name}!`,
      text: `🎉 ¡Hoy celebramos a ${member.name} de ${member.place}! 🎂\nFecha de nacimiento: ${formatDate(new Date(member.birthday))}`,
      imageUrl: member.image,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: member.name,
      confirmButtonText: '¡Gracias!',
      confirmButtonColor: '#FF7F00', // Naranja
    });
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

      {/* Modo de vista: Día o Mes */}
      <div className="view-mode-selector">
        <button onClick={() => setViewMode('day')} className={viewMode === 'day' ? 'active' : ''}>
          Ver por Día
        </button>
        <button onClick={() => setViewMode('month')} className={viewMode === 'month' ? 'active' : ''}>
          Ver por Mes
        </button>
      </div>

      {/* Mostrar la fecha seleccionada */}
      <h2>{viewMode === 'day' ? `Cumpleaños el ${formatDate(selectedDate)}` : `Cumpleaños de este mes`}</h2>

      <div className="birthday-list">
        {filteredMembers.length > 0 ? (
          filteredMembers.map(member => (
            <div key={member.id} className="birthday-card">
              <img src={member.image} alt={member.name} className="birthday-image" />
              <h3>{member.name}</h3>
              <p>¡Feliz cumpleaños!</p>
              <h5>{member.place}</h5>
              {viewMode === 'month' && (
                <p className="birthday-date">{formatDate(new Date(member.birthday))}</p>
              )}
              <p className="birthday-age">¡Feliz {calculateAge(member.birthday)} años!</p>
              <button onClick={() => showAlert(member)}>Felicitar</button>
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
