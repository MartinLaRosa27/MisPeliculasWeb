export const GuardarStorage = (clave, item) => {
  // Conseguir los elementos que ya tenemos en el LocalStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  // Comprobar si es un array:
  if (Array.isArray(elementos)) {
    // Añadir elemento:
    elementos.push(item);
  } else {
    // Crear un array:
    elementos = [item];
  }
  // Guardar en el LocalStorage:
  localStorage.setItem(clave, JSON.stringify(elementos));
};
