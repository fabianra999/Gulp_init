console.log('for');

for(var i=1; i<=10; i++){

	if(i==4 ||i==7 ){//salta el bucle al comienzo cuando i es = a 4 o 7
		continue;
	}

	console.log('mi numero', i); // Primera iteracion imprime var i

	for(var x=1; x<=10; x++){
		console.log(i,'x',x,'=',(i*x));
	}

	if(i==5){//termina el bucle cuando i es == 5
		break;
	}

}

console.log('while');

var $contador = 1;
while($contador < 5){
	console.log('hola while:', $contador);
	$contador++;
	if ($contador == 3){
		break;
	}
}