// al declarar los parametros de una funcion... estos podrian tener el mismo nombre
// javascript lo permite pero guarda solo el ultimo valor asignado a la variable
// nuevamente si usamos 'use stric' marcaria un error de declaracion de variables
// en resumen.... creo que es conveniente usar el 'use strict' durante el desarrollo pero no 
// en la explotacion del sistema.

// 'use strict';

function x(a,b,a){
    console.log(a);
}

x(1,2,3);