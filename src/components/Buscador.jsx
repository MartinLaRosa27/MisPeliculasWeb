import React, { useState } from "react";

export const Buscador = ({ listado, setListado }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPelicula = (e) => {
    setBusqueda(e.target.value);
    // Busca coicidencias:
    let peliculasEncontradas = listado.filter((pelicula) => {
      return pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    if (busqueda.length <= 1 || peliculasEncontradas.length <= 0) {
      peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    // Peliculas filtradas:
    setListado(peliculasEncontradas);
  };

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador</h3>
        {noEncontrado && busqueda.length > 2 && (
          <span>No se encontraron coincidencias</span>
        )}
        <form>
          <input
            type="text"
            id="search_field"
            name="buscar"
            autoComplete="off"
            onChange={(e) => buscarPelicula(e)}
          />
        </form>
      </div>
    </>
  );
};
