
// Esto es un objeto y sus propiedades
var miCafe = {
		sabor: 				"Expresso",
		temperatura: 	"Medianamente Caliente",
		cantidad: 		100,
		leche: 				false,
		recalentar:		function () {
				if (miCafe.temperatura === "Frio") {
						miCafe.temperatura = "Medianamente Caliente";
						alert("Su Cafe ha sido recalentado");
				}

		}
};

miCafe.temperatura = "Frio";
miCafe.recalentar();
