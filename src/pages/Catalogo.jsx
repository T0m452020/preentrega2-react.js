import { Link } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
];

function Catalogo() {
  return (
    <div>
    <h1>Catálogo de Productos</h1>
    {productos.map((producto) => (
        <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <Link to={`/deportes/producto/${producto.id}`}>Ver detalle</Link>
        </div>
    ))}
    </div>
);
}

export default Catalogo;