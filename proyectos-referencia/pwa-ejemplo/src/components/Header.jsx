/**
 * CONCEPTO: Encabezado de la aplicacion
 * QUE HACE: Muestra el titulo de la app y una breve descripcion en la parte superior.
 * POR QUE: Es un componente de presentacion: no maneja datos ni estado, solo dibuja.
 *          Separarlo mantiene App.jsx mas limpio y el codigo mas ordenado.
 */

import React from "react";

function Header() {
  return (
    <header className="bg-marca-vino text-marca-fondo shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Ruta del Cafe
        </h1>
        <p className="text-marca-amarillo text-sm md:text-base mt-1">
          Cafes de especialidad en Guatemala.
        </p>
      </div>
    </header>
  );
}

export default Header;
