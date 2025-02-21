import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"; // Importa los estilos

function Cart() {
const { cart, removeFromCart, totalPrice } = useContext(CartContext);

return (
    <div className="cart-page">
    <h1>Carrito de Compras</h1>
    {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
    ) : (
        <div>
        <ul className="cart-list">
            {cart.map((item) => (
            <li key={item.id} className="cart-item">
                <h2>{item.name}</h2>
                <p>Precio: ${item.price.toFixed(2)}</p>
                <p>Cantidad: {item.quantity}</p>
                <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
                >
                Eliminar
                </button>
            </li>
            ))}
        </ul>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    )}
    </div>
);
}

export default Cart;