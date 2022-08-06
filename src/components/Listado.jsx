import React, { useEffect, useState } from "react";

export const Listado = ({ listado, setListado }) => {
  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    setListado(peliculas);
    return peliculas;
  };

  const borrarPelicula = (id) => {
    // Conseguir peliculas almacenadas:
    let peliculasAlmacenadas = conseguirPeliculas();
    // Eliminar pelicula:
    let nuevoListadoPeliculas = peliculasAlmacenadas.filter(
      (pelicula) => pelicula.id != id
    );
    // Actualizar listado:
    setListado(nuevoListadoPeliculas);
    // Actualizar localStorage:
    localStorage.setItem("peliculas", JSON.stringify(nuevoListadoPeliculas));
  };

  return (
    <>
      {listado != null ? (
        listado.map((pelicula) => {
          return (
            <article key={pelicula.id} className="peli-item">
              <h3 className="title">{pelicula.titulo}</h3>
              <p className="description">{pelicula.descripcion}</p>
              <button
                className="delete"
                onClick={() => borrarPelicula(pelicula.id)}
              >
                Borrar
              </button>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
