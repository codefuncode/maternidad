		function inicio_automatico(argument) {
			let cierra_sesion = document.getElementById("cierra_sesion");
			let imagenes_galeria = document.querySelector(".imagenes_galeria");
			let mySidebar = document.getElementById("mySidebar");
			let overlayBg = document.getElementById("myOverlay");
			let main = document.getElementById("main");
			let cuerpo = document.getElementById('cuerpo');
			let bienvenida_inicio = document.getElementById('bienvenida_inicio');
			let formulario_bebe = document.querySelector(".formulario_bebe");
			let btn_muenu_usuario = document.getElementById('btn_muenu_usuario');
			btn_vav();
			cierra_sesion.style.display = "none";
			imagenes_galeria.style.display = "none";
			modal_bagregar_bebe();

			cierra_sesion.addEventListener("click", function(argument) {
				localStorage.clear();
				location.reload();

			});
			console.log(localStorage.length);
			if (localStorage.length == 0) {
				no_esta_logeado();
			} else {
				btn_muenu_usuario.style.display = "block";
				formulario_bebe.style.display = "none";
				mySidebar.style.display = 'none';
				overlayBg.style.display = "none";
				mySidebar.style.width = "0px";
				main.style.marginLeft = "0px";
				cuerpo.style.display = "block";
				bienvenida_inicio.style.display = "block";
				cierra_sesion.style.display = "block";
				console.log('idusuario es');
				console.log(localStorage.getItem("idusuario"));

				let formData = new FormData();
				formData.append("idusuario", localStorage.getItem("idusuario"));
				usuario_datos_llenos(formData);
			}
		}


		function no_esta_logeado(argument) {

			let formulario_bebe = document.querySelector(".formulario_bebe");
			let cuerpo = document.getElementById("cuerpo");
			cuerpo.style.display = "block";
			formulario_bebe.style.display = "none";
			navegacion_inicio();
			inicio();
			btn_registrarce();
			fun_registrase();
			inicio_de_sesion();
			exiixte_usuario_modal();
			// var newImg = new Image;
			// newImg.onload = function() {

			// }


			// newImg.src = './img/img_avatar4.png';

			let registro_inicio_sesion = document.getElementById("registro_inicio_sesion");

			registro_inicio_sesion.addEventListener("click", function(argument) {

				let inicia_sesion = document.getElementById("inicia_sesion");
				// let all_modal = document.querySelectorAll(".all_modal");
				// for (var i = 0; i < all_modal.length; i++) {
				// 	all_modal[i].style.display = "none";
				// }
				// let existe_usuario = document.getElementById('existe_usuario');
				// let error_server = document.getElementById('error_server');
				// let bienvenida_inicio = document.getElementById('bienvenida_inicio');
				// let registo = document.getElementById('registo');
				let inicio = document.getElementById('inicio');
				// let btn_muenu_usuario = document.getElementById('btn_muenu_usuario');
				// registo.style.display = "none";
				inicio.style.display = "block";
				inicia_sesion.style.display = "none";
				// existe_usuario.style.display = "none";
				// error_server.style.display = "none";
				// bienvenida_inicio.style.display = "none";
				// btn_muenu_usuario.style.display = "none";
			});
		}

		function usuario_datos_llenos(datos) {
			$.ajax({
				url: 'php/usuario_datos_llenos.php',
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

				const json = resultado;
				const obj = JSON.parse(json);

				console.log(obj.respuesta[0]);
				console.log(obj.respuesta[0]['nombre_cliente']);

				let aviso_completa_perfil = document.querySelector(".aviso_completa_perfil");
				let btn_completa_perfil = document.querySelector(".btn_completa_perfil");

				btn_completa_perfil.addEventListener("click", function(argument) {
					let bienvenida_inicio = document.getElementById("bienvenida_inicio");
					bienvenida_inicio.style.display = "none";
					let perfil_usuario = document.querySelector(".perfil_usuario");
					perfil_usuario.style.display = "block";
				});

				let cuerpo = document.getElementById('cuerpo');
				if (obj.respuesta[0]['nombre_cliente'] == null ||
					obj.respuesta[0]['apellido_cliente_paterno'] == null ||
					obj.respuesta[0]['apellido_cliente_materno'] == null ||
					obj.respuesta[0]['id_etapa'] == null ||
					obj.respuesta[0]['fecha_regreso'] == null ||
					obj.respuesta[0]['id_genero'] == null) {
					console.log('es nulo');
					aviso_completa_perfil.style.display = "block";


				} else {
					aviso_completa_perfil.style.display = "none";

					console.log('no es nulo ');
				}
				console.log(aviso_completa_perfil);
				// Object { id_cliente: "4", nombre_cliente: null, apellido_cliente_paterno: null, apellido_cliente_materno: null, id_etapa: null, fecha_regreso: null, id_genero: null, id_usuario: "28" }



			});
		}