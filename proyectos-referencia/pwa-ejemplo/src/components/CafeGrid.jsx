/**
 * CONCEPTO: Cuadricula de cafeterias
 * QUE HACE: Recibe la lista de cafeterias (ya filtradas) y dibuja una tarjeta por cada una.
 * POR QUE: Separar la "cuadricula" de la "tarjeta" mantiene cada componente con una
 *          sola responsabilidad: CafeGrid organiza el layout, CafeCard dibuja un cafe.
 */

import React from "react";
import CafeCard from "./CafeCard";

function CafeGrid({ cafeterias, onSeleccionar }) {
  // Caso sin resultados: si la categoria filtrada no tiene cafeterias, avisamos.
  if (cafeterias.length === 0) {
    return (
      <p className="text-center text-marca-vino/70 py-16">
        No hay cafeterias en esta categoria.
      </p>
    );
  }

  return (
    /* CONCEPTO: Grid responsivo con Tailwind
       QUE HACE: 1 columna en celular, 2 en tablet, 3 en escritorio.
       POR QUE: Las clases sm:/lg: aplican estilos segun el ancho de la pantalla,
                logrando un diseno adaptable sin escribir CSS manual. */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cafeterias.map((cafeteria) => (
        <CafeCard
          key={cafeteria.id}
          cafeteria={cafeteria}
          onSeleccionar={onSeleccionar}
        />
      ))}
    </div>
  );
}

export default CafeGrid;
