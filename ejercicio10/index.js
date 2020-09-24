let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));

if (num1 === 0 && num2 === 0) {
  console.log(0);
} else if (num1 % 6 === num2 % 6) {
  if (num1 < num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
} else {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
