/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/

var pm = {

	zona: document.querySelector("#efectoMouse")

}

/*=============================================
EL OBJETO CON LOS MÉTODOS DEL MOUSE
=============================================*/

var mm = {

	inicioMouse: function(){

		pm.zona.addEventListener("mousemove", mm.movimientoMouse)	

	},

	movimientoMouse: function(mouse){

		console.log(mouse.offsetX, mouse.offsetY)

	}

}

mm.inicioMouse();


