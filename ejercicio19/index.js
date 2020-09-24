let numHelados = parseInt(window.prompt("Número de helados"));

if (numHelados <= 10) {
  console.log(`Son ${numHelados * 2}€`);
} else {
  console.log(
    `${numHelados} helados + 1 de regalo son ${numHelados + 1} helados por ${
      numHelados * 2
    }`
  );
}
