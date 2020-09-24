let dia = window.prompt("escribe un día de la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  console.log(dia);
} else if (dia === "sabado" || dia === "domingo") {
  console.log("Fin de semana");
} else {
  console.log("El día introducido es incorrecto o lleva tilde.");
}
