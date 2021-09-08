function cronometro(argument) {
	var horas = 0;
	var minutos = 0;
	var segundos = 0;

	var intervalo;

	let btn_comenzar = document.querySelector(".cronometro .comenzar");
	let btn_detener = document.querySelector(".cronometro .detener");
	let btn_reiniciar = document.querySelector(".cronometro .reiniciar");

	hora = document.querySelector(".cronometro .hora");
	minuto = document.querySelector(".cronometro .minuto");
	segundo = document.querySelector(".cronometro .segundo");

	btn_comenzar.addEventListener("click", function(argument) {
		intervalo = setInterval(contador, 1000);
	});

	btn_detener.addEventListener("click", function(argument) {
		clearInterval(intervalo);
	});

	btn_reiniciar.addEventListener("click", function(argument) {
		clearInterval(intervalo);
		horas = 0;
		minutos = 0;
		segundos = 0;

		hora.textContent = "00";
		minuto.textContent = "00";
		segundo.textContent = "00";



	});


	function contador(argument) {
		segundos += 1;

		if (segundos >= 60) {
			segundos = 0;
			minutos += 1;

		}

		if (minutos >= 60) {
			minutos = 0;
			horas += 1;
		}


		if (horas <= 9) {
			hora.textContent = "0" + horas;
		} else {
			hora.textContent = horas;
		}

		if (minutos <= 9) {
			minuto.textContent = "0" + minutos;
		} else {
			minuto.textContent = minutos;
		}

		if (segundos <= 9) {
			segundo.textContent = "0" + segundos;
		} else {
			segundo.textContent = segundos;
		}

	}
}

cronometro();

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
// 	var d = new Date();
// 	var t = d.toLocaleTimeString();
// 	document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
// 	clearInterval(myVar);
// }