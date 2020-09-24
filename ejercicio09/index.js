let temp = parseInt(window.prompt("Escribe la temperatura que hace fuera"));

if (temp > 40) {
  console.log("vete a otro sitio");
} else if (temp > 30) {
  console.log("Enciende el AC");
} else if (temp > 20) {
  console.log("No hagas nada");
} else if (temp > 10) {
  console.log("Enciende la calefacción");
} else if (temp < 10) {
  console.log("vete a otro sitio");
}
