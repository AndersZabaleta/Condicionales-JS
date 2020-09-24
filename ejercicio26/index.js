let edad = parseInt(window.prompt("Escribe tu edad"));
let carnet;
let nombre;
let ciudad;
let dias;
let precioTotal;
if (edad < 18) {
  window.alert("Eres menor. No puedes alquilar un coche");
} else {
  let respuesta = window.prompt("Tienes carnet=");
  if (respuesta === "si") {
    carnet = true;
  } else {
    carnet = false;
  }

  if (!carnet) {
    window.alert("Sin carnet no hay coche");
  } else {
    nombre = window.prompt("Escribe tu nombre y apellidos");
    ciudad = window.prompt("Escribe la ciudad de recogida");
    dias = window.prompt("Número de días");
  }
}

if (dias < 7) {
  precioTotal = dias * 25;
  console.log(
    `Nombre: ${nombre}, Ciudad de recogida: ${ciudad}, Días: ${dias} Total: ${precioTotal}€`
  );
} else if (dias % 7 === 0) {
  precioTotal = (dias / 7) * 150;
  console.log(
    `Nombre: ${nombre}, Ciudad de recogida: ${ciudad}, Días: ${dias} Total: ${precioTotal}€`
  );
} else if (dias % 7 !== 0 && dias > 7) {
  let cuenta = 1;
  if ((dias - cuenta) % 7 === 0) {
    precioTotal = ((dias - cuenta) / 7) * 150 + cuenta * 25;
    console.log(
      `Nombre: ${nombre}, Ciudad de recogida: ${ciudad}, Días: ${dias} Total: ${precioTotal}€`
    );
  } else {
    cuenta++;
  }
  if ((dias - cuenta) % 7 === 0) {
    precioTotal = ((dias - cuenta) / 7) * 150 + cuenta * 25;
    console.log(
      `Nombre: ${nombre}, Ciudad de recogida: ${ciudad}, Días: ${dias} Total: ${precioTotal}€`
    );
  } else {
    cuenta++;
  }
}
