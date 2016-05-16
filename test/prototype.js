var Televisor = function(con)
{
	this.contexto = con;
	this.color = "negro";
	this.marca = "Sony";
	this.precio = 200.00;
	this.modelo = "BRAVIA";
}

Televisor.prototype.getColor = function(){
	return this.color;	
}

Televisor.prototype.dibujar = function() {
	var dibujo = this.contexto;

	dibujo.beginPath();
	dibujo.moveTo(0,0);
	dibujo.lineTo(500,500);
	dibujo.lineWidth = 5;
	dibujo.strokeType = "#000";

	dibujo.moveTo(0,500);
	dibujo.lineTo(500,0);

	

	dibujo.stroke();
	dibujo.closePath();

	dibujo.beginPath();
	dibujo.lineWidth = 5;
	dibujo.strokeType = "#000";
	dibujo.arc(250,250,50,0,Math.PI * 2,false);
	dibujo.stroke();
	dibujo.closePath();
}




var contexto = document
					.getElementById("dibujo")
					.getContext("2d");

var tele = new Televisor(contexto);

tele.dibujar();
