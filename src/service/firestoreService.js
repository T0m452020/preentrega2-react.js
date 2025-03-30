import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const createOrder = async (orderData) => {
    try {
        const ordersCollection = collection(db, "orders");
        const order = {
            ...orderData,
            date: serverTimestamp(), // Usamos el timestamp del servidor
            status: "pending"
        };
        const docRef = await addDoc(ordersCollection, order);
        return docRef.id;
    } catch (error) {
        console.error("Error al crear la orden:", error);
        throw error;
    }
};

export const getOrderById = async (orderId) => {
    // Implementación opcional para futuras mejoras
};