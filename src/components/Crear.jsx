import React, { useState } from "react";
import { GuardarStorage } from "../helpers/GuardarStorage.js";

export const Crear = ({ listado, setListado }) => {
  const titulo = "Añadir Pelicula";

  const [pelicula, setPelicula] = useState({
    id: 0,
    titulo: "",
    descripcion: "",
  });

  const conseguirDatosForm = (e, valores) => {
    // Recargo de pagina:
    e.preventDefault();
    // Datos del formulario en objeto:
    const pelicula = {
      id: new Date().getTime(),
      titulo: valores.title.value,
      descripcion: valores.description.value,
    };
    // Se modifica el estado del objeto pelicula:
    setPelicula(pelicula);
    // Actualizar el estado del listado principal:
    if (listado != null) {
      setListado((elementos) => {
        return [...elementos, pelicula];
      });
    } else {
      setListado([pelicula]);
    }
    // Guardar en el almacenamiento local:
    GuardarStorage("peliculas", pelicula);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{titulo}</h3>
        <form onSubmit={(e) => conseguirDatosForm(e, e.target)}>
          <input
            type="text"
            id="title"
            placeholder="Titulo"
            name="title"
            required
          />
          <textarea
            id="description"
            placeholder="Descripción"
            name="description"
            required
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};
