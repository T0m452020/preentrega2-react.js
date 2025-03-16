import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../service/productService";
import Item from "./Item";
import "./ItemListContainer.css";
import { CartContext } from "../context/CartContext";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { cart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

  console.log("categoryId:", categoryId);

  useEffect(() => {
    getProductsByCategory(categoryId).then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>
        {categoryId === "ropa-superior"
          ? "Ropa Superior"
          : categoryId === "ropa-inferior"
          ? "Ropa Inferior"
          : "Zapatillas"}
      </h1>
      <div className="item-list">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <Item
              key={product.id}
              product={product}
              quantity={quantity}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;