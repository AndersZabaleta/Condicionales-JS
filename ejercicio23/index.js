let nota1 = parseInt(window.prompt("Escribe la nota del primer examen"));
let nota2 = parseInt(window.prompt("Escribe la nota del segundo examen"));
let nota3 = parseInt(window.prompt("Escribe la nota del tercer examen"));

let notaFinal;

if (nota1 > nota2) {
  notaFinal = nota1 + nota3;
} else {
  notaFinal = nota2 + nota3;
}

if (notaFinal < 5) {
  console.log(`${notaFinal}: Suspenso`);
} else if (notaFinal < 6) {
  console.log(`${notaFinal}: Suficiente`);
} else if (notaFinal < 7) {
  console.log(`${notaFinal}: Bien`);
} else if (notaFinal < 9) {
  console.log(`${notaFinal}: Notable`);
} else if (notaFinal < 10) {
  console.log(`${notaFinal}: Sobresaliente`);
} else if (notaFinal === 10) {
  console.log(`${notaFinal}: Matricula`);
} else {
  console.log(`${notaFinal}`);
}
