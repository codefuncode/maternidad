console.log('formulario_bebe');

function modal_bagregar_bebe(argument) {
	let btn_agregar_bebe =
		document.querySelector(
			".btn_agregar_bebe");

	let imagenes_galeria =
		document.querySelector(
			".imagenes_galeria");

	let formulario_bebe =
		document.querySelector(
			".formulario_bebe");

	let bienvenida_inicio =
		document.getElementById("bienvenida_inicio");

	btn_agregar_bebe.addEventListener(
		"click",
		function() {

			imagenes_galeria.style.display = "none";
			formulario_bebe.style.display = "block";
			bienvenida_inicio.style.display = "none";
			// inicio.style.display = "none";
			console.log(this);
		});

}

function inserta_bebe(argument) {
	let nombre_bebe =
		document.querySelector(
			'.form_formulario_bebe [name="nombre_bebe"]'
		);


	let fecha_naciminto_bebe =
		document.querySelector(
			'.form_formulario_bebe [name="fecha_naciminto_bebe"]'
		);


	let genero =
		document.querySelectorAll(
			'.form_formulario_bebe [name="genero"]'
		);


	let lactancia =
		document.querySelectorAll(
			'.form_formulario_bebe [name="lactancia"]'
		);


	let peso_bebe =
		document.querySelector(
			'.form_formulario_bebe [name="peso_bebe"]'
		);



	console.log('nombre_bebe');
	console.log(nombre_bebe);
	console.log('fecha_naciminto_bebe');
	console.log(fecha_naciminto_bebe);
	console.log('genero');
	console.log(genero);
	console.log('lactancia');
	console.log(lactancia);
	console.log('peso_bebe');
	console.log(peso_bebe);
}

// inserta_bebe();