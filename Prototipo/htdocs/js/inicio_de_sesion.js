function inicio_de_sesion(argument) {
	let btn_inicio_sesion = document.getElementById("btn_inicio_sesion");
	let btn_inicio_cancel = document.getElementById("btn_inicio_cancel");
	let nombre_usuario_inicio = document.getElementById("nombre_usuario_inicio");
	let pass_inicio_session = document.getElementById("pass_inicio_session");
	let btn_inicia_sesion = document.getElementById('btn_inicia_sesion');
	let inicio = document.getElementById('inicio');
	let imagenes_galeria = document.querySelector(".imagenes_galeria");

	btn_inicio_cancel.addEventListener("click", function(argument) {

		inicio.style.display = "none";
		imagenes_galeria.style.display = "block";
		btn_inicia_sesion.style.display = "block";
		// btn_inicia_sesion
	});

	btn_inicia_sesion.addEventListener("click", function(argument) {

		inicio.style.display = "block";
		imagenes_galeria.style.display = "none";
		btn_inicia_sesion.style.display = "none";
		// btn_inicia_sesion.style.display = "block";
		// btn_inicia_sesion
	});

	btn_inicio_sesion.addEventListener("click", function(argument) {
		console.log('inisiar sesion');
		console.log(this);
		console.log(nombre_usuario_inicio.value);
		console.log(pass_inicio_session.value);
		let formData = new FormData();
		formData.append("nombre_usuario", nombre_usuario_inicio.value);
		// formData.append("correo", correo);
		formData.append("pass", pass_inicio_session.value);

		function inicia_sesion(datos) {
			$.ajax({
				url: 'php/inicio_sesion.php',
				type: 'POST',
				data: datos,
				contentType: false,
				cache: false,
				processData: false,
			}).done(function() {

				console.log("success");

			}).fail(function(error) {

				console.log(error);

			}).always(function(resultado) {

				console.log(resultado);

				const json = resultado;
				const obj = JSON.parse(json);

				console.log(obj.respuesta);

				if (obj.respuesta == 1) {
					// alert("logeado");
					console.log(obj.datos[0]);
					console.log(obj.datos[0]['idusuario']);
					console.log(obj.datos[0]['nombre_usuario']);
					// console.log(obj.datos[0]['']);

					// Object { 0: "19", 1: "admin", 2: null, 3: "1111", idusuario: "19", nombre_usuario: "admin", correo: null, pass: "1111" }
					let formulario_bebe = document.querySelector(".formulario_bebe");
					let imagenes_galeria = document.querySelector(".imagenes_galeria");

					let inicio = document.getElementById('inicio');
					let bienvenida_inicio = document.getElementById('bienvenida_inicio');
					let btn_muenu_usuario = document.getElementById('btn_muenu_usuario');
					let cierra_sesion = document.getElementById("cierra_sesion");
					cierra_sesion.style.display = "block";
					// let menu_navegacion=
					// imagenes_galeria.style.display = "none";
					inicio.style.display = "none";

					// formulario_bebe.style.display = "block";
					bienvenida_inicio.style.display = "block";
					btn_muenu_usuario.style.display = "block";
					localStorage.setItem('idusuario', obj.datos[0]['idusuario']);
					console.log('idusuario es');
					console.log(localStorage.getItem("idusuario"));


				} else if (obj.respuesta == 0) {
					alert("No esta logeado");
				}

				// let existe_usuario = document.getElementById('existe_usuario');
				// let error_server = document.getElementById('error_server');
				// let inicia_sesion = document.getElementById('inicia_sesion');
				// let registo = document.getElementById('registo');
				// let inicio = document.getElementById('inicio');
				// let btn_muenu_usuario = document.getElementById('btn_muenu_usuario');
				// existe_usuario.style.display = "none";
				// error_server.style.display = "none";
				// inicia_sesion.style.display = "none";
				// btn_muenu_usuario.style.display = "none";


				// if (obj.respuesta == "existe") {
				// 	existe_usuario.style.display = "block";
				// 	error_server.style.display = "none";
				// 	inicia_sesion.style.display = "none";
				// 	registo.style.display = "none";
				// 	inicio.style.display = "none";

				// } else if (obj.respuesta == "error") {
				// 	existe_usuario.style.display = "none";
				// 	error_server.style.display = "block";
				// 	inicia_sesion.style.display = "none";
				// 	registo.style.display = "none";
				// 	inicio.style.display = "none";
				// } else if (obj.respuesta == "insertado") {

				// 	registo.style.display = "none";
				// 	inicio.style.display = "none";
				// 	existe_usuario.style.display = "none";
				// 	error_server.style.display = "none";
				// 	inicia_sesion.style.display = "block";
				// 	btn_muenu_usuario.style.display = "block";

				// }

			});

		}

		inicia_sesion(formData);

	});

}