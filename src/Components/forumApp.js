import React from "react";
import ReactDOM from "react-dom";
import Forum from "./Forum"; 
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Forum /> {/* Utilisez Forum à la place de App */}
  </React.StrictMode>,
  document.getElementById("root")
);

// Si vous voulez mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple: reportWebVitals(console.log))
// ou les envoyer à un point de terminaison d'analyse. Apprenez-en plus: https://bit.ly/CRA-vitals
reportWebVitals();
