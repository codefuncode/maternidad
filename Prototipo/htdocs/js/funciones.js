function clear_url_img(argument) {
	let imahgenes = document.querySelectorAll("img");

	for (var i = 0; i < imahgenes.length; i++) {
		console.log(imahgenes[i]);
	}
}



function inicio(argument) {
	let main = document.getElementById("main");
	let mySidebar = document.getElementById("mySidebar");
	let cuerpo = document.getElementById("cuerpo");
	let inicio = document.getElementById("inicio");
	let registo = document.getElementById("registo");
	mySidebar.style.display = "none";
	mySidebar.style.width = "0px";
	main.style.marginLeft = "0px";
	inicio.style.display = "none";
	registo.style.display = "none";
	// cuerpo.style.display = "block";
	inicio.style.display = "block";

}

function btn_registrarce(argument) {
	let registrase = document.getElementById("registrase");
	let inicio = document.getElementById("inicio");
	let registo = document.getElementById("registo");

	// console.log(registrase);


	registrase.addEventListener("click", function(argument) {
		inicio.style.display = "none";
		registo.style.display = "block";
		console.log(this);



	});


}