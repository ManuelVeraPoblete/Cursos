alert("Introduccion a Sentencias de Control");

/* var respuesta = prompt("Cual es la Capital de Chile");

if ( respuesta === "Santiago") {
	alert("correcto");
} else {
	alert("incorrecto");
}

var miAnimalFavorito = prompt("Cual es tu Animal Favorito");

if (miAnimalFavorito === "Tortuga") {

	alert ("Eres de " + respuesta + " y te gustan las " + miAnimalFavorito )
} else if ( miAnimalFavorito === "Caballo" ) {
	alert ("si Eres de " + respuesta + " los " + miAnimalFavorito + "Son geniales" );
} else { alert ("el " + miAnimalFavorito + " No lo conosco") }


*/
// Otra parte del ejercicio

var numeroAleatorio = Math.round(Math.random() * 15)
//var numeroAleatorio = 15;

console.log(numeroAleatorio);
if      ( numeroAleatorio%3 === 0 && numeroAleatorio%5 === 0 && numeroAleatorio != 0  ) {	alert( numeroAleatorio + "es divisible por 3 y por 5 ") ; }
else if ( numeroAleatorio%3 === 0 && numeroAleatorio != 0                             ) {   alert(" ese numero es divisible por 3")                 ; }
else if ( numeroAleatorio%5 === 0 && numeroAleatorio != 0                             ) {   alert("ese numero es divisible por 5 ")                 ; }
else if ( numeroAleatorio   === 0                                                     ) {   alert("numero no puede ser cero")                       ; }
else                                                                                    {   alert(" el numero no es divisible ni por 3 ni por 5")     ; }