/**
 * CONCEPTO: Filtro por categoria
 * QUE HACE: Muestra un boton por cada categoria. Al hacer clic, avisa al componente
 *           padre (App) cual categoria se eligio.
 * POR QUE: El filtro no guarda el estado por su cuenta; lo "levanta" hacia App mediante
 *          la funcion onSeleccionar. Asi App decide que cafeterias mostrar. Este patron
 *          se llama "lifting state up" (levantar el estado).
 */

import React from "react";

function CategoryFilter({ categorias, categoriaActiva, onSeleccionar }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categorias.map((categoria) => {
        // Marcamos visualmente el boton de la categoria activa.
        const activa = categoria === categoriaActiva;

        return (
          <button
            key={categoria}
            onClick={() => onSeleccionar(categoria)}
            className={
              "px-4 py-2 rounded-full text-sm font-semibold transition-colors " +
              (activa
                ? "bg-marca-naranja text-white"
                : "bg-white text-marca-vino border border-marca-vino/20 hover:bg-marca-amarillo/20")
            }
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
