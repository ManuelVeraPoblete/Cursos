// Verificar si que numero son divisibles por 3 o por 5

for (var i = 0; i < 100; i++) {
		if ( i%3 === 0 && i%5 === 0 && i != 0 ) {
				console.log( "El Numero " + i + " es divisible por 3 y pr 5 ");
		} else if ( i%3 === 0 ) {
			  console.log ("El Numero " + i + " es divisible por 3");
		} else if ( i%5 === 0 ) {
			  console.log ("El Numero " + i + " es divisible por 5");
		}
}

// el mismo ejercicio por con switch

for (var i = 1; i < 100; i++) {

	switch (i%3) {
		case 0:
			console.log ("El Numero " + i + " es divisible por 3");
			break;
		default:
			break;
	}
	switch (i%5) {
		case 0:
			console.log ("El Numero " + i + " es divisible por 5");
			break;
		default:
			break;
	}

}
