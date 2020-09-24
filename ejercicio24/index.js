let num = parseInt(window.prompt("Escribe un número"));
let tipo = window
  .prompt("Escibe C para Centrigrados o F para Farenheit")
  .toUpperCase();

if (tipo === "C") {
  let centigrados = ((num - 32) * 5) / 9;
  console.log(`${num} grados Farenheit son ${centigrados} grados Centigrados`);
} else if (tipo === "F") {
  let farenheit = (num * 9) / 5 + 32;
  console.log(`${num} grados Centigrados son ${farenheit} grados Farenheit`);
} else {
  console.log("No has introducido ni C ni F");
}
