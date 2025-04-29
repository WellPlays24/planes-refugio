import React from 'react';
import './Staff.css'; // Importa los estilos

// Datos del personal
import greece from '../assets/admins/greece.png';
import becca from '../assets/admins/becca.png';
import danny from '../assets/admins/danny.png';
import alex from '../assets/admins/alex.png';
import well from '../assets/admins/well.png';
import bernal from '../assets/admins/bernal.png';
import juanpablo from '../assets/admins/juanpablo.png';
import dayanara from '../assets/admins/dayanara.png';
import pedro from '../assets/admins/pedro.png';
import gabriel from '../assets/admins/gabriel.png';
import haru from '../assets/admins/haru.png';
import mildred from '../assets/admins/mildred.png';
import unknow from '../assets/admins/unknow.png';

const staffMembers = [
  { id: 1, name: 'Greece KO',             role: 'Admin General',     image: greece,    phone: '593981785853' },
  { id: 2, name: 'Rebecca Moysam',        role: 'Admin Guayaquil',   image: becca,     phone: '593960054439' },
  { id: 3, name: 'Danny de la Torre',     role: 'Admin Guayaquil',   image: danny,     phone: '593983568294' },
  { id: 4, name: 'Alex',                  role: 'Admin Sto Domingo', image: alex,      phone: '593939253879' },
  { id: 5, name: 'Wellington Castillo',   role: 'Admin Machala',     image: well,      phone: '593986615580' },
  { id: 6, name: 'Juan Pablo Rodriguez',  role: 'Admin Quito',       image: juanpablo, phone: '593992715387' },
  { id: 7, name: 'Anthony Bernal',        role: 'Admin Manta',       image: bernal,    phone: '593939253879' },
  { id: 8, name: 'Dayanara Alava',        role: 'Admin Manta',       image: dayanara,  phone: '593959913044' },
  { id: 9, name: 'Pedro Villamil',        role: 'Admin Manta',       image: pedro,     phone: '593991260786' },
  { id: 10, name: 'Gabriel Basantes',     role: 'Admin Cotacachi',   image: gabriel,   phone: '593960651971' },
  { id: 11, name: 'Mildred Cantos',       role: 'Admin Guayaquill',  image: mildred,   phone: '593961354863' },
   
];

/*
* Haru no e añadida por que aun no tiene ningun plan!
* { id: 12, name: 'Haru Tomalá',            role: 'Admin Santa Elena', image: haru, phone: '593997362590' },
*/


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
