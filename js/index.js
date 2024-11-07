/**
 * Tenemos un abasto que procesa el código, nombre y costo de varios artículos
 * Se desea procesar estos artículos sabiendo que el precio de venta es con un
 * incremento del 25% del costo.
 * Se desea saber:
 * + El precio de venta de cada articulo
 * + Los artículos con menor precio de venta
 * + Los artículos con costo mayor que el promedio
 * + Cantidad de artículos con menor precio de venta
 * Cantidad de artículos con costo mayor que el promedio
 *
 * id   nombre     costo    pvp()
 * 1    Cerveza     1000    1250
 * 2    Coca-cola    500     625
 * 3    Pepsi        100     125
 * 4    Agua         300     375
 * 5    Jugo         100     125
 *
 * Artículos con menor precio de venta: Pepsi y Jugo (Resultado es ARRAY)
 * El promedio es: 400 (Resultado es número)
 * Artículos con costo mayor que el promedio: Cerveza y Coca-cola (Resultado es ARRAY)
 * Cantidad de artículos con menor precio de venta: 2 (Resultado es número)
 * Cantidad de artículos con costo mayor que el promedio: 2 (Resultado es número)
 */

import Cl_abasto from "./Cl_abasto.js";
import Cl_articulo from "./Cl_articulo.js";
import Dt_articulos from "./data.js";

const abasto = new Cl_abasto();

Dt_articulos.forEach((articulo) =>
  abasto.agregarArticulo(
    new Cl_articulo(articulo.id, articulo.nombre, articulo.costo)
  )
);

let articulosMenorPvp = (abasto, salida) => {
  let articulos = abasto.articulosMenorPvp();
  salida.innerHTML = `<br>Articulos con menor precio de venta:`;
  articulos.forEach((articulo) => {
    salida.innerHTML += `<br>${articulo.id} ${
      articulo.nombre
    } ${articulo.pvp()}`;
  });
};

let promedio = (abasto, salida) => {
  let promedio = abasto.costoPromedio();
  salida.innerHTML = `<br>El promedio es: ${promedio}`;
};

let articulosCostoMayorPromedio = (abasto, salida) => {
  let articulos = abasto.articulosCostoMayorPromedio();
  salida.innerHTML = `<br>Articulos con costo mayor que el promedio:`;
  articulos.forEach((articulo) => {
    salida.innerHTML += `<br>${articulo.id} ${articulo.nombre} ${articulo.costo}`;
  });
};

let cantidadMenorPrecio = (abasto, salida) => {
  let cntArticulos = abasto.cantidadArticulosMenorPvp();
  salida.innerHTML = `<br>Cantidad de artículos con menor precio de venta: ${cntArticulos}`;
};

let cantidadMayorPromedio = (abasto, salida) => {
  salida.innerHTML = `<br>Cantidad de artículos con costo mayor que el promedio: 
  ${abasto.cantidadCostoMayorPromedio()}`;
};

let agregarArticulo = (abasto) => {
  let id = prompt("Ingrese el id del articulo:");
  let nombre = prompt("Ingrese el nombre del articulo:");
  let costo = prompt("Ingrese el costo del articulo:");
  abasto.agregarArticulo(new Cl_articulo(id, nombre, costo));
};

let eliminarArticulo = (abasto) => {
  let id = prompt("Ingrese el id del articulo a eliminar:");
  if (abasto.eliminarArticulo(id)) alert(`Se eliminó el articulo ${id}`);
  else alert(`No existe el articulo ${id}`);
};

let listarArticulos = (abasto, salida) => {
  salida.innerHTML = "";
  abasto.articulos.forEach((articulo) => {
    salida.innerHTML += `<br>${articulo.id} ${articulo.nombre} ${
      articulo.costo
    } ${articulo.pvp()}`;
  });
};

let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML = `<br>Seleccione una opción:
  <br>1= Agregar artículo
  <br>2= Artículos con menor precio de venta
  <br>3= El promedio
  <br>4= Artículos con costo mayor que el promedio
  <br>5= Cantidad de artículos con menor precio de venta
  <br>6= Cantidad de artículos con costo mayor que el promedio
  <br>7= Listar artículos
  <br>8= Eliminar artículo`;

opciones.onclick = () => {
  let opcion = +prompt("Seleccione su opción:");
  switch (opcion) {
    case 1:
      agregarArticulo(abasto);
      break;
    case 2:
      articulosMenorPvp(abasto, salida2);
      break;
    case 3:
      promedio(abasto, salida2);
      break;
    case 4:
      articulosCostoMayorPromedio(abasto, salida2);
      break;
    case 5:
      cantidadMenorPrecio(abasto, salida2);
      break;
    case 6:
      cantidadMayorPromedio(abasto, salida2);
      break;
    case 7:
      listarArticulos(abasto, salida2);
      break;
    case 8:
      eliminarArticulo(abasto);
      break;
  }
};
