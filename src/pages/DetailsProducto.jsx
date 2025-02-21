import { useParams } from "react-router-dom";

const productos = [
    { id: 1, nombre: "Producto 1", precio: 100, descripcion: "Descripción del Producto 1" },
    { id: 2, nombre: "Producto 2", precio: 200, descripcion: "Descripción del Producto 2" },
    { id: 3, nombre: "Producto 3", precio: 300, descripcion: "Descripción del Producto 3" },
];

function DetalleProducto() {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === parseInt(id));

if (!producto) {
    return <div>Producto no encontrado</div>;
}

    return (
        <div>
        <h1>{producto.nombre}</h1>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>
    </div>
);
}

export default DetalleProducto;