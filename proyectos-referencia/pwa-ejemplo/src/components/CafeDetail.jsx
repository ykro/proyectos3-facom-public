/**
 * CONCEPTO: Vista detalle de una cafeteria (modal)
 * QUE HACE: Muestra toda la informacion de una cafeteria seleccionada sobre un fondo
 *           oscuro, con un boton para cerrar y volver a la ruta del cafe.
 * POR QUE: La cuadricula muestra solo un resumen; el detalle permite ver la descripcion
 *          completa. Se presenta como modal (ventana flotante) para no perder el contexto.
 */

import React from "react";
import { estiloCategoria } from "./CafeCard";

function CafeDetail({ cafeteria, onCerrar }) {
  const badge = estiloCategoria(cafeteria.categoria);

  return (
    /* CONCEPTO: Fondo oscuro (overlay)
       QUE HACE: Cubre toda la pantalla y oscurece el fondo. Al hacer clic fuera de la
                 tarjeta se cierra el detalle.
       POR QUE: Es el patron clasico de un modal: enfocar la atencion en una cosa. */
    <div
      onClick={onCerrar}
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
    >
      {/* CONCEPTO: Detener la propagacion del clic
          QUE HACE: stopPropagation evita que un clic DENTRO de la tarjeta cierre el modal.
          POR QUE: Solo queremos cerrar al hacer clic en el fondo, no en el contenido. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-marca-fondo rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <img
            src={cafeteria.imagenUrl}
            alt={cafeteria.nombre}
            className="w-full h-56 object-cover"
          />

          {/* Boton de cerrar */}
          <button
            onClick={onCerrar}
            aria-label="Cerrar"
            className="absolute top-3 right-3 bg-marca-vino text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold hover:bg-marca-naranja transition-colors"
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          <span
            className="inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3"
            style={{ backgroundColor: badge.fondo, color: badge.texto }}
          >
            {cafeteria.categoria}
          </span>

          <h2 className="text-2xl font-bold text-marca-vino leading-tight">
            {cafeteria.nombre}
          </h2>

          <p className="text-marca-naranja font-medium mt-3">
            {cafeteria.especialidad}
          </p>

          <p className="text-marca-texto/80 mt-1">{cafeteria.zona}</p>

          <hr className="my-4 border-marca-vino/10" />

          <p className="text-marca-texto leading-relaxed">
            {cafeteria.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CafeDetail;
