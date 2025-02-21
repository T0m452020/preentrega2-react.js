import React from "react";
import { Link } from "react-router-dom"; 
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/deportes" className="logo">
        AdidasStore
      </Link>
      <div className="nav-links">
        <Link to="/deportes/galeria">Galería</Link>
        <Link to="/deportes/category/ropa-superior">Ropa Superior</Link>
        <Link to="/deportes/category/ropa-inferior">Ropa Inferior</Link>
        <Link to="/deportes/category/zapatillas">Zapatillas</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
