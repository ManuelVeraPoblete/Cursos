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

var numeroAleatorio = Math.round(Math.random() * 5)

console.log(numeroAleatorio);

if ( numeroAleatorio%3 === 0 ) {
	alert(" ese numero es divisible por 3");
} else if ( numeroAleatorio%5 === 0 ) {
	alert("ese numero es divisible por 5 ");
} else { alert(" el numero no es divisible ni por 3 ni por 5");}