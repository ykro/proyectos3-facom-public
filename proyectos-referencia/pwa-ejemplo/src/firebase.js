/**
 * CONCEPTO: Inicializacion centralizada de Firebase
 * QUE HACE: Crea una sola instancia de Firebase y exporta la referencia a Firestore (db).
 * POR QUE: Inicializar Firebase en un unico archivo evita conexiones duplicadas.
 *          Todos los componentes importan "db" desde aqui y comparten la misma conexion.
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * CONCEPTO: Configuracion del proyecto (placeholder)
 * QUE HACE: Guarda las llaves que conectan esta app con TU proyecto de Firebase.
 * POR QUE: Cada proyecto de Firebase tiene llaves unicas. Estas son de ejemplo.
 *
 * IMPORTANTE: Reemplaza estos valores con los de tu proyecto.
 *   Firebase Console > Configuracion del proyecto > Tus apps > Configuracion (SDK).
 *
 * NOTA AI STUDIO: Si construyes esta app dentro de Google AI Studio (Build),
 * Firebase se auto-aprovisiona: AI Studio crea el proyecto y reemplaza esta
 * configuracion por ti. En ese caso no necesitas pegar las llaves a mano.
 */
const firebaseConfig = {
  apiKey: "TU-API-KEY",
  authDomain: "TU-PROYECTO.firebaseapp.com",
  projectId: "TU-PROYECTO",
  storageBucket: "TU-PROYECTO.appspot.com",
  messagingSenderId: "TU-SENDER-ID",
  appId: "TU-APP-ID",
};

/*
 * CONCEPTO: Reglas de seguridad de Firestore
 * QUE HACE: Firestore exige reglas que definan quien puede leer/escribir datos.
 * POR QUE: Para este demo (solo lectura, sin login) bastan reglas de prueba.
 *
 * En Firebase Console > Firestore Database > Reglas, usa:
 *
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     match /{document=**} {
 *       allow read: if true;
 *       allow write: if false;
 *     }
 *   }
 * }
 *
 * Estas reglas permiten que cualquiera LEA las cafeterias pero nadie las escriba
 * desde la app (el catalogo lo carga el editor; la app es solo de lectura).
 */

// initializeApp() crea la instancia principal de Firebase. Se llama una sola vez.
const app = initializeApp(firebaseConfig);

// getFirestore() obtiene la referencia a la base de datos Firestore.
// Esta referencia "db" se importa en los componentes que leen datos.
export const db = getFirestore(app);

export default app;
