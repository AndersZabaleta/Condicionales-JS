let num1 = parseInt(window.prompt("escribe un número"));
let num2 = parseInt(window.prompt("escribe otro número"));
let num3 = parseInt(window.prompt("escribe otro más número"));

if (num1 < num2 && num1 < num3) {
  console.log("El menor de los tres es " + num1);
} else if (num2 < num1 && num2 < num3) {
  console.log("El menor de los tres es " + num2);
} else {
  console.log("El menor de los tres es " + num3);
}
