const products = [
  // Ropa Superior
  {
    id: 1,
    name: "Camiseta Adidas Essentials",
    price: 25,
    category: "Ropa-sup",
    description: "Camiseta cómoda y transpirable.",
    image: "/assets/Ropa-sup/Buzo1.avif",
  },
  {
    id: 2,
    name: "Sudadera Adidas Originals",
    price: 45,
    category: "ropa-superior",
    description: "Sudadera con capucha y diseño clásico.",
    image: "/assets/Ropa-sup/Buzo2.jpg",
  },
  {
    id: 3,
    name: "Sudadera Adidas Originals",
    price: 80,
    category: "ropa-superior",
    description: "Sudadera con capucha y diseño clásico.",
    image: "/assets/Ropa-sup/Buzo3.avif",
  },
  {
    id: 4,
    name: "Sudadera Adidas Originals",
    price: 40,
    category: "ropa-superior",
    description: "Sudadera con capucha y diseño clásico.",
    image: "/assets/Ropa-sup/Buzo4.avif",
  },

  // Ropa Inferior
  {
    id: 5,
    name: "Pantalón Adidas Training",
    price: 35,
    category: "ropa-inferior",
    description: "Pantalón deportivo para entrenamiento.",
    image: "/assets/Ropa-inf/Pantalon1.avif",
  },
  {
    id: 6,
    name: "Shorts Adidas Essentials",
    price: 20,
    category: "ropa-inferior",
    description: "Shorts ligeros y cómodos.",
    image: "/assets/Ropa-inf/Pantalon2.avif",
  },
  {
    id: 7,
    name: "Shorts Adidas Essentials",
    price: 20,
    category: "ropa-inferior",
    description: "Shorts ligeros y cómodos.",
    image: "/assets/Ropa-inf/Pantalon3.avif",
  },
  {
    id: 8,
    name: "Shorts Adidas Essentials",
    price: 20,
    category: "ropa-inferior",
    description: "Shorts ligeros y cómodos.",
    image: "/assets/Ropa-inf/Pantalon4.avif",
  },

  // Zapatillas
  {
    id: 9,
    name: "Zapatillas Adidas Ultraboost",
    price: 120,
    category: "zapatillas",
    description: "Zapatillas con tecnología Boost para máxima comodidad.",
    image: "/assets/Calzado/Calzado1.avif",
  },
  {
    id: 10,
    name: "Zapatillas Adidas Superstar",
    price: 80,
    category: "zapatillas",
    description: "Zapatillas icónicas con puntera de goma.",
    image: "/assets/Calzado/Calzado2.avif",
  },
  {
    id: 11,
    name: "Zapatillas Adidas Superstar",
    price: 80,
    category: "zapatillas",
    description: "Zapatillas icónicas con puntera de goma.",
    image: "/assets/Calzado/Calzado3.avif",
  },
  {
    id: 12,
    name: "Zapatillas Adidas Superstar",
    price: 80,
    category: "zapatillas",
    description: "Zapatillas icónicas con puntera de goma.",
    image: "/assets/Calzado/Calzado4.avif",
  },
];

export function getProductsByCategory(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter((p) => p.category === category);
      resolve(filteredProducts);
    }, 1000);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === parseInt(id));
      resolve(product);
    }, 1000);
  });
}