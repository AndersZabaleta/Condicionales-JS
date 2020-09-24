let nombre = window.prompt("Nombre");
let ventas = parseInt(window.prompt("Ventas"));

if (ventas >= 500) {
  let extra = (ventas * 5) / 100;
  console.log(
    `Nombre: ${nombre} Ventas: ${ventas} Extra: ${extra} Total: ${
      ventas + extra
    }`
  );
} else {
  console.log(`Nombre: ${nombre} Ventas: ${ventas} Extra: No hay extra`);
}
