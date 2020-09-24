let anyo = parseInt(window.prompt("Escribe un año"));

if (anyo % 4 === 0 || (anyo % 100 === 0 && anyo % 400 === 0)) {
  console.log(`El año ${anyo} es bisiesto`);
} else {
  console.log("no bisiesto");
}
