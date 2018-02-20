// DESPLIEGA LOS NUMERO DEL 0 A 10
var contador = 0;
for (contador = 0; contador < 10; contador++) {
	console.log(contador);
}

// SUMA LOS N PRIMEROS NUMERO

var total = 30;
var suma = 0;
for (var i = 0; i < total; i++) {
	suma = suma + i;
	console.log(suma);
}
// DOBLANDO LA CANTIDAD ANTERIOR ANTERIOR
total = 30;
multiplica = 1;
for (var i = 0; i < total; i++) {

	multiplica = multiplica * 2;
	console.log(multiplica);
}

// FACTORIAL DE N

var numero = prompt("Ingrese Numero a Calcular");
var resultado = 1;
for (var i = 1; i < numero ; i++) {
	resultado = resultado + (resultado * i);
	console.log(resultado);
}
