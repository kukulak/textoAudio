

var x

var audio

var parrafo

var nextWord = 1;

let audioArch, fft, binWidth

// FFT analysis resolution.
// Must be a power of two between 16 and 1024.
const bins = 64

var fileDoesNotExist = function(whosError, afterError, index){
	        whosError.onerror = function(){
	        	document.getElementById("noHay").innerHTML += afterError[index] + " ";
	        	console.log(afterError[index])
	        	index++;
	        	audio.src="audiomp3" + "/" + "nohay" + "-01" + ".mp3";
	        	audio.play();

	        };
	        }




var contador = 1

function crearNodoHijo(nodoPadre, mensaje) {
	var nodoHijo = document.createElement("div");
	nodoHijo.className = "nuevoMensaje"
	nodoHijo.onclick = function(){unaFuncion(event);};
//	
	var h = document.createElement("P");
//
	var nodoTexto = document.createTextNode(mensaje);
//	
	h.appendChild(nodoTexto);
//
	nodoHijo.appendChild(h);

	nodoPadre.appendChild(nodoHijo);

	var abajo = document.getElementById("aquiLosTextos");

	contador = contador +1;

	function scrollMe(){
		var divTall = document.getElementById("aquiLosTextos").scrollHeight;

		document.getElementById("aquiLosTextos").scrollTop += divTall;


	}

	scrollMe()

}



function myFunction() {
		x = document.getElementById("aquiElTexto").value;

		parrafo = x.split(" ");

		var index = 1;


	audio = new Audio("audiomp3" + "/" + parrafo[0] + "-01" + ".mp3");
	audio.play();
	fileDoesNotExist(audio, parrafo, 0);

	audio.onended = function() {
		    if(index < parrafo.length){
		        audio.src="audiomp3" + "/" + parrafo[index] + "-01" + ".mp3";
		        fileDoesNotExist(audio, parrafo, index);
		        index++;
		        audio.play();	        
		    } 
		};

		document.getElementById("aquiElTexto").value = "";

		crearNodoHijo(document.getElementById("aquiLosTextos"), x);



}


function unaFuncion(event) { 

    var reListen = event.target.innerHTML
    listenFunction(reListen);
}

function listenFunction(objetoEscuchar) {
		x = objetoEscuchar;

		parrafo = x.split(" ");

		var index = 1;


	audio = new Audio("audiomp3" + "/" + parrafo[0] + "-01" + ".mp3");
	audio.play();
	fileDoesNotExist(audio, parrafo, 0);

	audio.onended = function() {
		    if(index < parrafo.length){
		        audio.src="audiomp3" + "/" + parrafo[index] + "-01" + ".mp3";
		        fileDoesNotExist(audio, parrafo, index);
		        index++;
		        audio.play();	        
		    } 
		};


	console.log("escribi algo si me ven si funciono");



}


document.getElementById("aquiElTexto").onkeypress = function(e){
    if (!e) e = window.event;
    if (e.keyCode == '13'){
   
      myFunction();
      return false;

    }
  };




document.getElementById("escuchar").onclick = function() {
	myFunction()
};

var infomodal = document.getElementById("infomodal");
var x = 1;
function showInfo(){
	if (x === 0) {
		infomodal.style.display = "none"
		x = 1
		// console.log(x)
	} else {
		// console.log("no se que")
		infomodal.style.display = "grid"
		x = 0
	}
}

document.getElementById('btninfo').onclick = function(){
	showInfo()
}





function visualTalk(sound){

	// la funcion va asi: 
	// 1.- tomo el nombre del archivo por la cadena a reproducir elnombre del archivo es Audio
	// 2.- hago draw donde vamos a generar un objeto para la representacion visual
	// 3.- lo ponemos en un canvas que estara en nuestro html o que se genera con setUp

	function preload(){
		audioArch = loadSound('../audiomp3/abeja-01.mp3')
	}

	function setup() {
		const canvas = createCanvas(200, 20)
	  
		fft = new p5.FFT(0, bins)
	  
		// The size of each rectangle.
		binWidth = width / bins
	  }

	  function draw() {
		background(0)
		noStroke()
	  
		const spectrum = fft.analyze()
	  
		for (let i = 0; i < spectrum.length; i++) {
		  let y = map(spectrum[i], 0, 255, height, 0)
		  rect(i * binWidth, y, binWidth, height - y)
		}
	  }

}