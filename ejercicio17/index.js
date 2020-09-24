let frase = window.prompt("Escribe una frase");

if (frase.length % 2 === 0) {
  console.log(frase.substring(frase.length / 2 - 1, frase.length / 2 + 1));
} else {
  console.log(frase.substring(frase.length / 2, frase.length / 2 + 1));
}
