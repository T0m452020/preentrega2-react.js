import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(
            cart.map((item) =>
                item.id === productId && item.quantity < 10
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart(
            cart.map((item) =>
                item.id === productId && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItemsCount, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);