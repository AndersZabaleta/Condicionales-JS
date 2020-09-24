let opcionUsuario = parseInt(
  window.prompt(`
Escribe una de las siguientes opciones (con números)
1 - Piedra
2 - Papel
3 - Tijeras
`)
);

let textoUsuario;

if (opcionUsuario === 1) {
  textoUsuario = "Piedra";
} else if (opcionUsuario === 2) {
  textoUsuario = "Papel";
} else if (opcionUsuario === 3) {
  textoUsuario = "Tijeras";
}

let opcionMaquina = Math.floor(Math.random() * (4 - 1) + 1);

let textoMaquina;

if (opcionMaquina === 1) {
  textoMaquina = "Piedra";
} else if (opcionMaquina === 2) {
  textoMaquina = "Papel";
} else if (opcionMaquina === 3) {
  textoMaquina = "Tijeras";
}

if (
  (opcionUsuario === 1 && opcionMaquina === 1) ||
  (opcionUsuario === 2 && opcionMaquina === 2) ||
  (opcionUsuario === 3 && opcionMaquina === 3)
) {
  console.log(`${textoUsuario} y ${textoMaquina} son iguales. Empate`);
} else if (
  (opcionUsuario === 1 && opcionMaquina === 3) ||
  (opcionUsuario === 2 && opcionMaquina === 1) ||
  (opcionUsuario === 3 && opcionMaquina === 3)
) {
  console.log(`${textoUsuario} vence a ${textoMaquina}. ¡Has ganado!`);
} else {
  console.log(`${textoMaquina} vence a ${textoUsuario}. Has perdido...`);
}
