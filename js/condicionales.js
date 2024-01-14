const edad = parseInt(prompt("Ingrese su edad"));

//If( condicion logica){
// Todo el codigo que quiero ejecutar si se cumple la condición
// }

if (edad >= 18 && edad <= 71) {
  alert("Puede tener un permiso para conducir");
} else {
  if (edad < 18) {
    alert("Sos menor de edad, no puedes tener un permiso para conducir");
  } else {
    alert("No puede manejar");
  }
}
