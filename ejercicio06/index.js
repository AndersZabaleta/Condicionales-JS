let num = parseInt(window.prompt("Escribe un número"));

if (num >= 1) {
  let cuadrado = num * num;
  let cubo = num * num * num;

  console.log(`Cuadrado de ${num} es: ${cuadrado}. El cubo es: ${cubo}`);
} else {
  console.log("no hacemos nada porque " + num + " es menor que 1");
}
