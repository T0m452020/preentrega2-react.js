import { db } from "./firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const productsRef = collection(db, "products"); // Referencia a la colección "products"
    const q = query(productsRef, where("category", "==", category)); // Filtra por categoría
    const querySnapshot = await getDocs(q); // Obtiene los documentos

    const products = [];
    querySnapshot.forEach((doc) => {
      // Agrega cada producto al array
      products.push({ id: doc.id, ...doc.data() });
    });

    return products; // Retorna los productos filtrados
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    throw error;
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", id); // Referencia al documento con el ID
    const productSnap = await getDoc(productRef); // Obtiene el documento

    if (productSnap.exists()) {
      // Si el documento existe, retorna los datos
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      // Si no existe, lanza un error
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error);
    throw error;
  }
};