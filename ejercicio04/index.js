let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));
let num3 = parseInt(window.prompt("Escribe otro número"));

if (num1 - 20 === num2) {
  console.log(`${num1} es 20 más que ${num2}`);
} else if (num1 - 20 === num3) {
  console.log(`${num1} es 20 más que ${num3}`);
} else if (num2 - 20 === num1) {
  console.log(`${num2} es 20 más que ${num1}`);
} else if (num2 - 20 === num3) {
  console.log(`${num2} es 20 más que ${num3}`);
} else if (num3 - 20 === num1) {
  console.log(`${num3} es 20 más que ${num1}`);
} else if (num3 - 20 === num2) {
  console.log(`${num3} es 20 más que ${num2}`);
} else {
  console.log("Ninguno es 20 más que ninguno de los otro");
}
