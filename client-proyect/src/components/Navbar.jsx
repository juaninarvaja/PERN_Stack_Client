import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Navbar.css';  // Asegúrate de que el archivo esté importado

function Navbar() {
  const navigate = useNavigate(); // Hook para navegar programáticamente
  const handleHomeClick = () => {
    navigate('/'); // Redirige a la ruta de Home
  }; 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 onClick={handleHomeClick} >Compra de Autos</h1>
        <div className="navbar-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
