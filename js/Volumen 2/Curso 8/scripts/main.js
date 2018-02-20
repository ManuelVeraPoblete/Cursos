
// Declarar posibles escenarios
var escenarios = ["Cocina","Baño","Ecuela","Casa"];

function numeroAleatorio(rango){
	return Math.round(Math.random() * rango );
}

alert (escenarios[numeroAleatorio(escenarios.length -1 )]);

var listaDeArmas = ["Cuchillo" , "Espada" , "Ametralladora", "Lanza Granadas" ];

var arma = listaDeArmas[numeroAleatorio(listaDeArmas.length - 1 )];

console.log(arma);
alert ("El Arma escojida  es " + arma )

sobrevivo = numeroAleatorio(2);

if ( sobrevivo === 0 ) {
	alert("El Zombie te mordio.... tu Pierdes")
} else if ( sobrevivo > 0 ) {
	alert ("Mataste al Zombie con un " + arma + "....Tu Ganas");
}
