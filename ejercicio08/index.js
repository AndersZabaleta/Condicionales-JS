let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));

if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else if (num1 === num2) {
  console.log(`${num1} y ${num2} son iguales`);
} else {
  console.log(`${num1} es menor que ${num2}`);
}
