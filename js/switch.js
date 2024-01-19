//Declarar variables

let saldo = 0;
do {
  const operacion = prompt(
    "Seleccione una opción: 1- Consultar el saldo, 2-Depositar Dinero, 3-Extraer dinero"
  );
  // Estructura Switch
  switch (operacion) {
    case "1":
      document.write(`<p>Saldo disponinle: $${saldo}</p>`);
      console.log(saldo);
      break;
    case "2":
      console.log("selecciono la opcion 2");
      const deposito = parseFloat(prompt("Ingrese el monto a depositar"));
      if (deposito > 0) {
        saldo = saldo + deposito;
        document.write(
          `<p>Ingreso $${deposito} a su cuenta, saldo actual es: $${saldo} </p>`
        );
        console.log(
          `Depositaste $${deposito} a su cuenta, saldo actual es: $${saldo}`
        );
      } else {
        document.write("<p> Ingresaste un monto invalido</p>");
        console.log("Ingreso un monto invalido");
      }
      break;
    case "3":
      console.log("selecciono la opcion 2");
      const extraccion = parseFloat(prompt("Ingrese el monto a extraer"));
      if (extraccion <= saldo && extraccion > 0) {
        saldo = saldo - extraccion;
        document.write(
          `<p>Extracción de $${extraccion} a su cuenta, saldo actual es: $${saldo} </p>`
        );
        console.log(
          `<p>Extracción de $${extraccion} a su cuenta, saldo actual es: $${saldo} </p>`
        );
      } else {
        document.write("<p> Ingresaste un monto invalido</p>");
        console.log("Ingreso un monto invalido");
      }
      break;
    default:
      alert("Selecciono opción invalida");
  }
} while (confirm("¿Desea realizar otra operación?"));

/* (Está estructura se condisera mala practica)
if(operacion === '1'){
    document.write('<p>mostrar el saldo</p>');
}else if(operacion === '2'){
    document.write('<p>Depositar dinero</p>');
}else if(operacion === 3){
    document.write('<p>Extraer dinero</p>');
}else{
    document.write('<p>Selecciono opción invalida</p>');
} 
*/
