/**
 * CONCEPTO: Punto de entrada de la aplicacion React
 * QUE HACE: Toma el componente App y lo "monta" dentro del <div id="root"> del HTML.
 * POR QUE: Toda app de React necesita un punto donde se conecta el codigo con la pagina.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
