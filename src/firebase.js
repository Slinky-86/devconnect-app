import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCw3_gtlHyp9R4d--e50nnmZYOxoY0m5MQ",
    authDomain: "devconnect-app.firebaseapp.com",
    projectId: "devconnect-app",
    storageBucket: "devconnect-app.firebasestorage.app",
    messagingSenderId: "1001029703864",
    appId: "1:1001029703864:web:370bc94ece6c35c26cfc4d",
    measurementId: "G-4GN4LLN8HT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;