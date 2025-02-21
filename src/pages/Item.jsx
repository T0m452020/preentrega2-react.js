import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "./Item.css"; 

function Item({ product }) {
  const { addToCart } = useCart(); 

  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} className="item-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <div className="item-actions">
        <Link to={`/deportes/item/${product.id}`} className="item-link">
          Ver detalle
        </Link>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default Item;