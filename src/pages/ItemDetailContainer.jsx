import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { getProductById } from "../service/mockService";
import { CartContext } from "../context/CartContext";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    getProductById(itemId).then((data) => setProduct(data));
    }, [itemId]);

    if (!product) return <div>Cargando...</div>;

    return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
    </div>
        );
}

export default ItemDetailContainer;