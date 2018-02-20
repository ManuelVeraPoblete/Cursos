

var signo = prompt("Que Signo eres?? ").toLowerCase();

alert("Veremos que trae para el futuro a " + signo );

switch (signo) {
	case "acuario":
		alert("Tu Signo es Acuario");
		break;
	case "tauro":
		alert ("tu Signo es Tauro");
		break;
	default:
		alert("Por favor ingrese un signo sodiacal valido");
		break;
}
