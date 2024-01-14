
/* while (codición logica){
    todas las lineas de codigo que quiero repetir varias veces 
    agregar un codigo para que la condición se deje de repetir "xq si no entra en un bucle infinito"
}
*/
//let renglon = 1;

//while( renglon<= 100){
    //document.write('<p> Renglon número'+ renglon+'</p>');
    // ${} sirve para concatenar contenido de una variable
    //document.write(`<p>Renglon número ${renglon}</p>`);
  //  renglon = renglon + 1;
//}
// do-while
/*
    do{
        todas las lineas de codigo que quiero repetir varias veces 
        agregar un codigo para que la condición se deje de repetir
    }while(condicion logica ) "en el do-while se ejecuta y luego se comprueba la condición"
*/
    let renglon = 1;
    do{
        document.write(`<p>Renglon número ${renglon}</p>`);
        renglon++;  //la variable con el ++ aumenta el valor de la misma de 1 en 1 
    }while(renglon <= 50)
//for