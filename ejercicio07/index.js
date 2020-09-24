let numerador = parseInt(window.prompt("Escribe un número"));
let denominador = parseInt(window.prompt("Escribe un número"));

if (denominador !== 0) {
  console.log(numerador / denominador);
} else {
  console.log("no se puede dividir por 0");
}
