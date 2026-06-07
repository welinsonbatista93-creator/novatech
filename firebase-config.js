import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración de Firebase obtenida de tu consola de Novatech
const firebaseConfig = {
  apiKey: "AIzaSyDBNd_pyP3VlU_xkZZgQTRiWodoTpHIa_I",
  authDomain: "novatech-app.firebaseapp.com",
  projectId: "novatech-app",
  storageBucket: "novatech-app.firebasestorage.app",
  messagingSenderId: "119891956386",
  appId: "1:119891956386:web:8529905730c3b89f2efdfb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);