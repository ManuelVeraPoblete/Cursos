// al usar 'use stric' desde el ambito globalmarcaria error en la asignacion
// de variable de stringToPrint pues no se ha definido antes
//pero al declarar y definir la variables dentro de la funcion ... no puedo
// ocuparla fuera de la funcion. (creo que es mejor usar 'use strict') pues las
// las variables se deverian ocupar en el ambito que fueron creadas
// sin el 'use strict' no marca error
'use strict';
var toPrint = 'Imprimeme ---->';
function print(out){
  var stringToPrint = out;
  console.log(stringToPrint);
}
print("Imprimir Hola desde funcion print()");
//console.log("tratando de imprimir variable stringToprint--> " + stringToPrint);



