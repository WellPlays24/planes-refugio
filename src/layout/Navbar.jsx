import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import './Navbar.css'; // Asegúrate de tener este archivo CSS

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Cambiar estado para el menú en móvil
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Cerrar el menú cuando se hace clic en un link
  const closeMenu = () => {
    setIsMobile(false);
  };

  // Detectar cuando se hace clic fuera del navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.navbar') === null) {
        setIsMobile(false);
      }
    };

    // Agregar el event listener cuando el componente se monte
    document.addEventListener('click', handleClickOutside);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Bienvenido
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span> {/* Icono del menú */}
        </button>

        <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
          <ul>
            <li>
              <Link className="nav-link" to="/quienes-somos" onClick={closeMenu}>
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/planes" onClick={closeMenu}>
                Planes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/reglas" onClick={closeMenu}>
                Reglas
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/layiots" onClick={closeMenu}>
                Layiots
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/viajes-realizados" onClick={closeMenu}>
                Viajes Realizados
              </Link>
            </li>
            
            <li>
              <Link className="nav-link" to="/staff" onClick={closeMenu}>
                Staff
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/birthdays" onClick={closeMenu}>
                Cumpleaños
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
