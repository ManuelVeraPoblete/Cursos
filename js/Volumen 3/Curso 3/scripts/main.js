
// Esto es un objeto y sus propiedades
var mark = {
	nombre: "Mark",
	colorCamiseta:	"Azul Marino"
};

// Esto es un objeto y sus propiedades
var lisa = {
	nombre: "Lisa",
	colorCamiseta:	"Amarillo"
};

function Amigo( nombre , colorCamiseta ) {
	this.nombre = nombre ;
	this.colorCamiseta  = colorCamiseta  ;
}

var maria 		= new Amigo("Maria", "Negro");
var jessica 	= new Amigo("Jessica", "Plomo");
var carmen 		= new Amigo("Carmen", "Verde");
var francisca = new Amigo("Francisca", "Naranjo");

alert(maria.nombre 		+ " " + maria.colorCamiseta			);
alert(lisa.nombre 		+ " " + lisa.colorCamiseta			);
alert(carmen.nombre 	+ " " + carmen.colorCamiseta		);
alert(francisca.nombre+ " " + francisca.colorCamiseta	);
