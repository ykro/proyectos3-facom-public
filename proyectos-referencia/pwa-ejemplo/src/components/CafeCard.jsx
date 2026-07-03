/**
 * CONCEPTO: Tarjeta de una cafeteria
 * QUE HACE: Muestra la imagen, categoria, nombre, especialidad y zona de un cafe.
 *           Al hacer clic, avisa a App cual cafe se eligio para abrir el detalle.
 * POR QUE: Es la pieza visual que se repite en la cuadricula. Recibe una cafeteria por
 *          prop y la dibuja; toda la logica de datos vive en App.
 */

import React from "react";

/**
 * CONCEPTO: Colores de badge por categoria
 * QUE HACE: Devuelve el color de fondo y de texto para la etiqueta de cada categoria,
 *           usando la paleta del curso.
 * POR QUE: Cada tipo de cafeteria tiene un color propio para que el catalogo se lea
 *          de un vistazo. Centralizar los colores aqui mantiene la consistencia.
 */
export function estiloCategoria(categoria) {
  const colores = {
    "Para trabajar": { fondo: "#6D2E46", texto: "#FFFFFF" },
    Brunch: { fondo: "#C84B31", texto: "#FFFFFF" },
    "De barrio": { fondo: "#E3B23C", texto: "#2B2B2B" },
    Tostador: { fondo: "#4F772D", texto: "#FFFFFF" },
    "Al paso": { fondo: "#3A6B7E", texto: "#FFFFFF" },
  };
  // Si la categoria no esta en la lista, usamos el color vino de la marca.
  return colores[categoria] || { fondo: "#6D2E46", texto: "#FFFFFF" };
}

function CafeCard({ cafeteria, onSeleccionar }) {
  const badge = estiloCategoria(cafeteria.categoria);

  return (
    <button
      onClick={() => onSeleccionar(cafeteria)}
      className="text-left bg-white rounded-xl overflow-hidden shadow-sm border border-marca-vino/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      {/* Imagen de la cafeteria. El atributo alt mejora la accesibilidad. */}
      <img
        src={cafeteria.imagenUrl}
        alt={cafeteria.nombre}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        {/* Etiqueta de categoria con su color propio */}
        <span
          className="inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2"
          style={{ backgroundColor: badge.fondo, color: badge.texto }}
        >
          {cafeteria.categoria}
        </span>

        <h3 className="text-lg font-bold text-marca-vino leading-snug">
          {cafeteria.nombre}
        </h3>

        <p className="text-sm text-marca-naranja font-medium mt-2">
          {cafeteria.especialidad}
        </p>

        <p className="text-sm text-marca-texto/70 mt-1">{cafeteria.zona}</p>
      </div>
    </button>
  );
}

export default CafeCard;
