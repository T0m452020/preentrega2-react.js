import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import DetailsProducto from "./pages/DetailsProducto";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/deportes" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="productos" element={<Productos />} />
            <Route path="producto/:id" element={<DetailsProducto />} />
            <Route path="category/:categoryId" element={<ItemListContainer />} />
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;