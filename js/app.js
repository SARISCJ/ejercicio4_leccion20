window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
    	var tiempo = parseInt(document.getElementById("tiempo").value);
			setInterval(color, tiempo*1000);
    	function color(){
    		document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    	}
  });
});





