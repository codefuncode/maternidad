function cargada(argument) {
	document.body.onload = function(argument) {


		let overlayBg = document.getElementById("myOverlay");



		var _img = document.getElementById('avatar_inicio');
		overlayBg.style.display = "none";



		let binbenida_usuario = document.querySelectorAll(".binbenida_usuario");
		console.log(binbenida_usuario);


		let botones = document.querySelectorAll("button");
		console.log(botones);

		inicio_automatico();
	}

}


function w3_open() {
	console.log('js');
	let mySidebar = document.getElementById("mySidebar");

	// Get the DIV with overlay effect
	let overlayBg = document.getElementById("myOverlay");
	let main = document.getElementById("main");
	if (mySidebar.style.display === 'block') {
		console.log('w3_open block');
		mySidebar.style.display = 'none';
		overlayBg.style.display = "none";
		// mySidebar.style.width = "0px";
		mySidebar.style.width = "0px";
		main.style.marginLeft = "0px";
	} else {
		console.log("w3_open none");
		mySidebar.style.display = 'block';
		overlayBg.style.display = "block";
		mySidebar.style.width = "300px";
		// main.style.marginLeft = "0px";
		main.style.marginLeft = "300px";
	}
}

// Close the sidebar with the close button
function w3_close() {
	console.log('js');
	let mySidebar = document.getElementById("mySidebar");

	// Get the DIV with overlay effect
	let overlayBg = document.getElementById("myOverlay");
	let main = document.getElementById("main");
	mySidebar.style.display = "none";
	overlayBg.style.display = "none";
	mySidebar.style.width = "0px";
}