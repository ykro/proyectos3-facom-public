/**
 * CONCEPTO: Componente principal de la Ruta del Cafe
 * QUE HACE: Lee las cafeterias de especialidad de Firestore en tiempo real, maneja el
 *           filtro por categoria, la cafeteria seleccionada (vista detalle) y reparte esos
 *           datos a los componentes hijos.
 * POR QUE: App es el "cerebro" de la aplicacion: aqui vive el estado (los datos que
 *          cambian) y desde aqui se coordinan las distintas secciones de la interfaz.
 */

import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import cafeteriasLocales from "./data/cafeterias.json";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import CafeGrid from "./components/CafeGrid";
import CafeDetail from "./components/CafeDetail";

function App() {
  // Lista de cafeterias que se muestran (vienen de Firestore o de los datos de ejemplo).
  const [cafeterias, setCafeterias] = useState([]);

  // Categoria seleccionada en el filtro. "Todos" muestra todas las categorias.
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // Cafeteria seleccionada para ver el detalle. null = no hay detalle abierto.
  const [cafeteriaSeleccionada, setCafeteriaSeleccionada] = useState(null);

  // Indicador de carga mientras se establece la conexion inicial con Firestore.
  const [cargando, setCargando] = useState(true);

  /**
   * CONCEPTO: useEffect con onSnapshot para escucha en tiempo real
   * QUE HACE: Al cargar la app, se conecta a la coleccion "cafeterias" de Firestore y
   *           recibe actualizaciones automaticas cuando se agregan o cambian cafeterias.
   * POR QUE: onSnapshot() mantiene una conexion viva: si el editor agrega una cafeteria
   *          nueva en la consola de Firebase, aparece en la app sin recargar la pagina.
   *          A diferencia de getDocs() (lectura unica), onSnapshot() escucha continuamente.
   */
  useEffect(() => {
    // query() arma la consulta: la coleccion "cafeterias" ordenada por nombre (A-Z),
    // para que el catalogo se lea de forma predecible.
    const consultaCafeterias = query(
      collection(db, "cafeterias"),
      orderBy("nombre", "asc")
    );

    const desuscribir = onSnapshot(
      consultaCafeterias,
      (snapshot) => {
        // snapshot.docs son todos los documentos de la coleccion.
        // Mapeamos cada uno para quedarnos con su id + sus campos.
        const lista = snapshot.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));

        // CONCEPTO: Respaldo con datos de ejemplo
        // QUE HACE: Si Firestore todavia no tiene cafeterias cargadas, usamos el JSON local.
        // POR QUE: Asi la app siempre muestra contenido en clase, aunque la base
        //          de datos este vacia. En produccion se quitaria este respaldo.
        setCafeterias(lista.length > 0 ? lista : cafeteriasLocales);
        setCargando(false);
      },
      (error) => {
        // Si falla la conexion (config placeholder, sin internet, etc.),
        // mostramos los datos de ejemplo para que la app siga siendo usable.
        console.error("Error al leer cafeterias de Firestore:", error);
        setCafeterias(cafeteriasLocales);
        setCargando(false);
      }
    );

    // Funcion de limpieza: cancela la suscripcion cuando el componente se desmonta.
    // Evita fugas de memoria y lecturas innecesarias a Firestore.
    return () => desuscribir();
  }, []);

  /**
   * CONCEPTO: Lista de categorias unicas
   * QUE HACE: Recorre las cafeterias y arma la lista de categorias sin repetir,
   *           anteponiendo la opcion "Todos".
   * POR QUE: El filtro debe mostrar exactamente las categorias que existen en los datos,
   *          sin escribirlas a mano. Si se agrega una categoria nueva, aparece sola.
   */
  const categorias = [
    "Todos",
    ...Array.from(new Set(cafeterias.map((cafeteria) => cafeteria.categoria))),
  ];

  /**
   * CONCEPTO: Filtrado de cafeterias
   * QUE HACE: Si la categoria activa es "Todos", muestra todas las cafeterias;
   *           si no, deja solo las que coinciden con la categoria seleccionada.
   * POR QUE: Es la logica central del filtro por categoria que pide la app.
   */
  const cafeteriasFiltradas =
    categoriaActiva === "Todos"
      ? cafeterias
      : cafeterias.filter(
          (cafeteria) => cafeteria.categoria === categoriaActiva
        );

  return (
    <div className="min-h-screen bg-marca-fondo text-marca-texto font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Filtro por categoria */}
        <CategoryFilter
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          onSeleccionar={setCategoriaActiva}
        />

        {/* Estado de carga */}
        {cargando ? (
          <p className="text-center text-marca-vino/70 py-16">
            Cargando la ruta del cafe...
          </p>
        ) : (
          /* Cuadricula de tarjetas de cafeterias.
             Al hacer clic en una tarjeta se guarda la cafeteria como seleccionada
             para abrir la vista detalle. */
          <CafeGrid
            cafeterias={cafeteriasFiltradas}
            onSeleccionar={setCafeteriaSeleccionada}
          />
        )}
      </main>

      {/* Vista detalle (modal). Solo se muestra si hay una cafeteria seleccionada.
          Cerrarla simplemente vuelve a poner cafeteriaSeleccionada en null. */}
      {cafeteriaSeleccionada && (
        <CafeDetail
          cafeteria={cafeteriaSeleccionada}
          onCerrar={() => setCafeteriaSeleccionada(null)}
        />
      )}
    </div>
  );
}

export default App;
