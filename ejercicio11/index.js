let num1String = window.prompt("Escribe un número");
let num2String = window.prompt("Escribe otro número");

let num1 = parseInt(num1String);
let num2 = parseInt(num2String);

if (num1 >= 25 && num1 <= 75 && num2 >= 25 && num2 <= 75) {
  if (
    num1String.substring(0, 1) === num2String.substring(0, 1) ||
    num1String.substring(0, 1) === num2String.substring(1) ||
    num1String.substring(1) === num2String.substring(0, 1) ||
    num1String.substring(1) === num2String.substring(1)
  ) {
    console.log("Tienen algún dígito en común");
  } else {
    console.log("Ningún dígito en común");
  }
} else {
  console.log("Los números introducidos no son correctos");
}
