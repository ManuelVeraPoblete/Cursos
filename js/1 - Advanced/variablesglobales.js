var toPrint = "imprimeme";

function print(out) {
  // var strinToPrint = out;
  strinToPrint = out;
  console.log(strinToPrint);
  console.log(toPrint);
}
// no se imrime pues fue declarada dentro de una funcion y en este momento esta
// fuera de la funcion print()
//console.log(strinToPrint);
print('Hola');
// en esta posicion se imprimira pues la variables no esta declarada con var
// esta declarada como global---> creo
// pero si la declaramos con var no puede ocuparse fuera de la funcion
console.log(strinToPrint);
