import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../service/config.js"; // Asegúrate de tener este archivo configurado
import { addDoc, collection } from "firebase/firestore";
import "./Cart.css";

function Cart() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [buyerData, setBuyerData] = useState({ name: "", email: "", phone: "" });

    // Función para crear la orden en Firestore
    const createOrder = async (orderData) => {
        try {
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, orderData);
            return docRef;
        } catch (error) {
            console.error("Error al crear la orden:", error);
            throw error;
        }
    };

    const handleCheckout = async () => {
        try {
            const order = {
                buyer: buyerData,
                items: cart,
                total: totalPrice,
                date: new Date().toISOString()
            };
            
            const docRef = await createOrder(order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al finalizar la compra:", error);
        }
    };

    return (
        <div className="cart-page">
            <h1>Carrito de Compras</h1>
            {orderId ? (
                <div className="order-success">
                    <h2>¡Compra realizada con éxito!</h2>
                    <p>Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            ) : cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="item-info">
                                    <h2>{item.name}</h2>
                                    <p>Precio unitario: ${item.price.toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                    <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-button"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-section">
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        
                        <div className="buyer-form">
                            <h3>Datos del comprador</h3>
                            <input 
                                type="text" 
                                placeholder="Nombre completo" 
                                value={buyerData.name}
                                onChange={(e) => setBuyerData({...buyerData, name: e.target.value})}
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={buyerData.email}
                                onChange={(e) => setBuyerData({...buyerData, email: e.target.value})}
                            />
                            <input 
                                type="tel" 
                                placeholder="Teléfono" 
                                value={buyerData.phone}
                                onChange={(e) => setBuyerData({...buyerData, phone: e.target.value})}
                            />
                        </div>
                        
                        <button 
                            onClick={handleCheckout}
                            className="checkout-button"
                            disabled={!buyerData.name || !buyerData.email || !buyerData.phone}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;