let numString = window.prompt("Escribe un número de tres cifras");

let num1 = parseInt(numString.substring(0, 1));
let num2 = parseInt(numString.substring(1, 2));
let num2 = parseInt(numString.substring(2));

if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {
  console.log("Todos son pares");
} else if (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0) {
  console.log("Todos son impares");
} else {
  console.log("Hay pares e impares");
}
