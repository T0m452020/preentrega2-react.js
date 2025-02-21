import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../service/mockService";
import Item from "./Item";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

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
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;