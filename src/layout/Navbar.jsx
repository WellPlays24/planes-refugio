import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Bienvenido</Link> {/* Cambiado a Link */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quienes Somos</Link> {/* Cambiado a Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link> {/* Cambiado a Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planes">Planes</Link> {/* Cambiado a Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reglas">Reglas</Link> {/* Cambiado a Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/layiots">Layiots</Link> {/* Cambiado a Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viajes-realizados">Viajes Realizados</Link> {/* Cambiado a Link */}
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
