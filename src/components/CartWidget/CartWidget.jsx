import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"; 
import "./CartWidget.css"; 

function CartWidget() {
    const { cartItemsCount } = useContext(CartContext); 

return (
    <Link to="/cart" className="cart-widget">
        🛒 <span>{cartItemsCount}</span>
    </Link>
    );
}

export default CartWidget;