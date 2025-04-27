import React from 'react';
import './Staff.css'; // Importa los estilos

// Datos del personal
import greece from '../assets/admins/greece.png';
import becca from '../assets/admins/becca.png';
import nicole from '../assets/admins/nicole.png';
import danny from '../assets/admins/danny.png';
import alex from '../assets/admins/alex.png';
import well from '../assets/admins/well.png';
import bernal from '../assets/admins/bernal.png';
import damian from '../assets/admins/damian.png';

const staffMembers = [
  {
    id: 1,
    name: 'Greece',
    role: 'Admin General',
    image: greece,
    phone: '593981785853',
    description: '',
  },
  {
    id: 2,
    name: 'Becca',
    role: 'Admin Guayaquil',
    image: becca,
    phone: '593960054439',
    description: '',
  },
  {
    id: 3,
    name: 'Danny',
    role: 'Admin Guayaquil',
    image: danny,
    phone: '',
    description: '',
  },
  {
    id: 4,
    name: 'Alex',
    role: 'Admin Sto Domingo',
    image: alex,
    phone: '593939253879',
    description: '',
  },
  {
    id: 5,
    name: 'Wellington',
    role: 'Admin Machala',
    image: well,
    phone: '593986615580',
    description: '',
  },
  {
    id: 6,
    name: 'Damian',
    role: 'Admin Quito',
    image: damian,
    phone: '593984509921',
    description: '',
  },
  {
    id: 7,
    name: 'Bernal',
    role: 'Admin Manta',
    image: bernal,
    phone: '593939253879',
    description: '',
  },
];

function Staff() {
  return (
    <section className="staff-container">
      <h2>Conoce a Nuestro Equipo</h2>
      
      {/* Texto informativo antes de la lista de miembros */}
      <p className="staff-info-text">
        Para unirte al grupo, por favor contacta a uno de nuestros administradores de tu ciudad o ciudad cercana.
      </p>

      <div className="staff-list">
        {staffMembers.map((member) => (
          <div key={member.id} className="staff-card">
            <img src={member.image} alt={member.name} className="staff-image" />
            <h3 className="staff-name">{member.name}</h3>
            <p className="staff-role">{member.role}</p>
            <p className="staff-description">{member.description}</p>

            {/* Botón de contacto de WhatsApp */}
            <a 
              href={`https://wa.me/${member.phone}?text=Hola%20me%20gustaría%20contactar%20contigo%20para%20más%20información%20sobre%20planes%20refugio.`} 
              className="btn-contact"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Contactar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Staff;
