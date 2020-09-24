let opcion1 = window
  .prompt(
    `-Bebida
- Comida
-Postres`
  )
  .toLowerCase();

if (opcion1 === "bebida") {
  let bebida = window.prompt(`-Cerveza
    -Refresco
    -Vino`);

  console.log(`Has elegido ${bebida}`);
} else if (opcion1 === "comida") {
  let comida = window.prompt(`-Carnes
    -Pescados
    `);
  console.log(`Has elegido ${comida}`);
} else if ((opcion1 = "postres")) {
  let postre = window.prompt(`-Natillas
    -Flan
    -Helado`);

  console.log(postre);
}
