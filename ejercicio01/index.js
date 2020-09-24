let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
  console.log(`${num2} es menor que ${num1}`);
} else {
  console.log(`${num1} es menor que ${num2}`);
  console.log(`${num2} es mayor que ${num1}`);
}
