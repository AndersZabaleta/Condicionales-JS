let texto = window.prompt("Escríbele algo a Bob");

if (
  texto.substring(texto.length - 1) === "?" &&
  texto.substring(texto.length - 2) !== "!?"
) {
  console.log("¡Claro!");
} else if (texto.substring(texto.length - 1) === "!") {
  console.log("¡Eh! Tranquilizate");
} else if (texto.substring(texto.length - 2) === "!?") {
  console.log("¡Eh, tranquilizate! Yo se lo que hago");
} else if (texto === "") {
  console.log("Vale, con que esas tenemos...");
} else {
  console.log("Sin mas");
}
