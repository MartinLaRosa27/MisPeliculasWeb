import React, { useState } from "react";
import { Buscador } from "./components/Buscador.jsx";
import { Crear } from "./components/Crear.jsx";
import { Listado } from "./components/Listado.jsx";

function App() {
  const [listado, setListado] = useState([]);

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPeliculasWeb</h1>
      </header>

      {/* Barra Navegacion */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <section id="content" className="content">
        {/* Listado de peliculas */}
        <Listado listado={listado} setListado={setListado} />
      </section>

      {/* Barra Lateral */}
      <aside className="lateral">
        {/* Buscador */}
        <Buscador listado={listado} setListado={setListado} />

        {/* Crear Pelicula */}
        <Crear listado={listado} setListado={setListado} />
      </aside>

      {/* Footer */}
      <footer className="footer">
        <strong>Martín Gabriel La Rosa</strong> - 28/07/2022
      </footer>
    </div>
  );
}

export default App;
