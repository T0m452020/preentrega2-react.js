import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLbWJBVwCR1i0bgy_VTpVcg6kWk7UuVE8",
    authDomain: "product-react-ch.firebaseapp.com",
    projectId: "product-react-ch",
    storageBucket: "product-react-ch.firebasestorage.app",
    messagingSenderId: "889109105509",
    appId: "1:889109105509:web:d3cce349a5672b75fe2f8c"
    };
    
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };