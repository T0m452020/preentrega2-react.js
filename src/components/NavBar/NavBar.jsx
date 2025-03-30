import React from "react";
import { Link } from "react-router-dom"; 
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        AdidasStore
      </Link>
      <div className="nav-links">
        <Link to="/galeria">Galería</Link>
        <Link to="/category/ropa-superior">Ropa Superior</Link>
        <Link to="/category/ropa-inferior">Ropa Inferior</Link>
        <Link to="/category/zapatillas">Zapatillas</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
