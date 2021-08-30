function btn_vav(argument) {
	let all_user_panel =
		document.querySelectorAll(".all_user_panel");
	let btn_nav_registro_bebe =
		document.querySelector(".btn_nav_registro_bebe");

	let btn_perfil_usuario =
		document.querySelector('.btn_perfil_usuario');

	console.log('=====================');
	console.log(all_user_panel);
	console.log('=====================');

	btn_nav_registro_bebe.addEventListener("click", function(argument) {

		for (var i = 0; i < all_user_panel.length; i++) {
			all_user_panel[i].style.display = "none";
		}

		let formulario_bebe = document.querySelector(".formulario_bebe");
		formulario_bebe.style.display = "block";
	});

	btn_perfil_usuario.addEventListener("click", function(argument) {
		for (var i = 0; i < all_user_panel.length; i++) {
			all_user_panel[i].style.display = "none";
		}

		let perfil_usuario = document.querySelector(".perfil_usuario");
		perfil_usuario.style.display = "block";
	});

}